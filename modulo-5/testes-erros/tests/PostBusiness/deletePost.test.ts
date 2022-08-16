import { PostBusiness } from "../../src/business/PostBusiness"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { IDeletePostInputDTO } from "../../src/models/Post"
import { BaseError } from "../../src/errors/BaseError"

describe("Testando PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("deletePost bem sucedido", async () => {
      const input: IDeletePostInputDTO = {
        token: "token-astrodev",
        postId: "201"
    }

        const response = await postBusiness.deletePost(input)

        expect(response.message).toEqual("Post deletado com sucesso")

    })
  
    test("retorna erro quando o token for inválido", async () => {
      try {      
        
        const input: IDeletePostInputDTO = {
          token: "token-lucas",
          postId: "201"
      }
         await postBusiness.deletePost(input)
        
      } catch (error:unknown) {
        if(error instanceof BaseError){
        expect(error.statusCode).toEqual(401)
        expect(error.message).toEqual("Não autenticado")
        }
      }
    })

    test("retorna erro quando o token for inválido", async () => {
      try {      
        
        const input: IDeletePostInputDTO = {
          token: "token-mock",
          postId: "200"
      }
         await postBusiness.deletePost(input)
        
      } catch (error:unknown) {
        if(error instanceof BaseError){
        expect(error.statusCode).toEqual(404)
        expect(error.message).toEqual("Post não encontrado")
        }
      }
    })
  
  })