import { ShowBusiness } from "../../src/business/ShowBusiness"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { BaseError } from "../../src/errors/BaseError"
import { ShowDatabase } from "../../src/database/ShowDatabase"
import { IBookTicketInputDTO, ICreateShowInputDTO, IRemoveLBookTicketInputDTO } from "../../src/models/Show"

describe("testing ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock() as unknown as ShowDatabase,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("remove book ticket show successful", async () => {
      const input: IRemoveLBookTicketInputDTO = {
        token: "token-astrodev",
        showId: "201"
    }


        const response = await showBusiness.removeBookTicket(input)

        expect(response.message).toEqual("ticket removed successfully")

    })

  }) 
