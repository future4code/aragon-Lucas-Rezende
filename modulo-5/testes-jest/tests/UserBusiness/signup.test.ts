import { UserBusiness } from "../../src/business/UserBusiness"
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
  test("signup feito com sucesso",async()=>{
    const input: ISignupInputDTO = {
      name: "lucas",
      email: "lucas@gmail.com",
      password: "lucas123"
  }

  const response = await userBusiness.signup(input)

  expect(response.message).toEqual("cadastro realizado com sucesso")
  expect(response.token).toEqual("token-mock")

  })

})