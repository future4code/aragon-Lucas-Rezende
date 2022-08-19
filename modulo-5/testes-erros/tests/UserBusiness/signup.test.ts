import { UserBusiness } from "../../src/business/UserBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { ISignupInputDTO } from "../../src/models/User"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("signup bem sucedido", async () => {
        const input: ISignupInputDTO = {
            name: "alice",
            email: "alice@gmail.com",
            password: "alice99"
        }

        const response = await userBusiness.signup(input)

        expect(response.message).toEqual("Cadastro realizado com sucesso")
        expect(response.token).toEqual("token-mock")
    })

    test("retorna erro quando enviar 'nome' com string vazia", async () => {
      try {      
        
        const input: ISignupInputDTO = {
        name: "",
        email: "alice@gmail.com",
        password: "alice99"
    }

    const response = await userBusiness.signup(input)
        
      } catch (error:unknown) {
        if(error instanceof BaseError){
        expect(error.statusCode).toEqual(400)
        expect(error.message).toEqual("Parâmetro 'name' inválido: mínimo de 3 caracteres")
        }
      }
    })

    test("retorna erro caso o 'nome' nçao seja uma string", async () => {
      try {      
        
        const input: ISignupInputDTO = {
        name: undefined,
        email: "alice@gmail.com",
        password: "alice99"
    } as unknown as ISignupInputDTO

          await userBusiness.signup(input)
        
      } catch (error:unknown) {
        if(error instanceof BaseError){
        expect(error.statusCode).toEqual(400)
        expect(error.message).toEqual("Parâmetro 'name' inválido: deve ser uma string")
        }
      }
    })

})