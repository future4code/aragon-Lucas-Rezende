import { tickets } from "../database/migrations/data"
import { ShowDatabase } from "../database/ShowDatabase"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { ICreateShowInputDTO, ICreateShowOutputDTO, IGetPostsInputDTO, IGetShowsOutputDTO, Show } from "../models/Show"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness { 
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public createShow = async (input: ICreateShowInputDTO) => {
      const { token, band, starts_at } = input

      const payload = this.authenticator.getTokenPayload(token)

      if (payload.role !== USER_ROLES.ADMIN) {
        throw new UnauthorizedError("only admins can create shows")
    }

      if (!payload) {
          throw new UnauthorizedError("not authenticated")
      }

      if (typeof band !== "string") {
          throw new RequestError("invalid 'band' parameter")
      }

      if (band.length < 1) {
          throw new RequestError("'band' needs at least one character")
      }

      const id = this.idGenerator.generate()

      const show = new Show(
          id,
          band,
          new Date(starts_at),  
      )

      await this.showDatabase.createShow(show)

      const response: ICreateShowOutputDTO = {
          message: "show created successfully",
          show
      }

      return response
  }

  public getShows = async () => {

    const showsDB = await this.showDatabase.getShows()

    const shows = showsDB.map(showDB => {
        return new Show(
            showDB.id,
            showDB.band,
            showDB.starts_at
        )
    })

    for (let show of shows) {
        const showId = show.getId()
        const tickets = await this.showDatabase.getTickets(showId)
        show.setTickets(tickets)
    }

    const response: IGetShowsOutputDTO = {
        shows
    }

    return response
}

}