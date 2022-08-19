import { PostBusiness } from "../../src/business/PostBusiness"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { IAddLikeInputDTO } from "../../src/models/Post"
import { BaseError } from "../../src/errors/BaseError"

describe("Testando PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("addLike bem sucedido", async () => {
      const input: IAddLikeInputDTO = {
        token: "token-mock",
        postId: "201"
    }

        const response = await postBusiness.addLike(input)

        expect(response.message).toEqual("Like realizado com sucesso")

    })

    test("retorna erro quando o post já foi curtido pelo usuário autenticado", async () => {
      try {      
        
        const input: IAddLikeInputDTO = {
          token: "token-astrodev",
          postId: "201"
      }
         await postBusiness.addLike(input)
        
      } catch (error:unknown) {
        if(error instanceof BaseError){
        expect(error.statusCode).toEqual(400)
        expect(error.message).toEqual("Já deu like")
        }
      }
    })

  })