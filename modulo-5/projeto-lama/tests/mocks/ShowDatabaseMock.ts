import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IShowDB, Show } from "../../src/models/Show"

export class ShowDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public toShowDBModel = (show: Show) => {
      const showDB: IShowDB = {
          id: show.getId(),
          band: show.getBand(),
          starts_at: show.getStartsAt()
      }

      return showDB
  }

    public createShow = async (show: Show) => {

  }


}