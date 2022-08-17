import { ShowBusiness } from "../../src/business/ShowBusiness"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { BaseError } from "../../src/errors/BaseError"
import { ShowDatabase } from "../../src/database/ShowDatabase"
import { ICreateShowInputDTO } from "../../src/models/Show"

describe("Testando PostBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock() as unknown as ShowDatabase,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("createPost bem sucedido", async () => {
        const input: ICreateShowInputDTO = {
            token: "token-astrodev",
            band: "system of down",
            starts_at: "2022/10/11"
        }

        const response = await showBusiness.createShow(input)

        expect(response.message).toEqual("show created successfully")
        expect(response.show.getId()).toEqual("id-mock")
        expect(response.show.getBand()).toEqual("system of down")
    })

  }) 
