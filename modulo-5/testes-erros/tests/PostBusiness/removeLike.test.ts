import { PostBusiness } from "../../src/business/PostBusiness"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { IRemoveLikeInputDTO } from "../../src/models/Post"
import { BaseError } from "../../src/errors/BaseError"

describe("Testando PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("removeLike bem sucedido", async () => {
      const input: IRemoveLikeInputDTO = {
        token: "token-astrodev",
        postId: "201"
    }

        const response = await postBusiness.removeLike(input)

        expect(response.message).toEqual("Like removido com sucesso ")

    })

  })