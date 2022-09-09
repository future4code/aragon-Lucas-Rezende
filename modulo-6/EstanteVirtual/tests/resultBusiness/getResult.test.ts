import {ResultBusiness} from "../../src/business/ResultBusiness"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ICreateResultInputDTO, IGetResultInputDTO } from "../../src/models/Result"
import { ResultDatabaseMock } from "../mocks/ResultsDatabaseMock"
import { CompetitionDatabase } from "../../src/database/CompetitionDataBase"
import { ResultDatabase } from "../../src/database/ResultDatabase"


describe("Testando getResults", () => {
  const resultBusiness = new ResultBusiness(
      new CompetitionDatabase() as unknown as CompetitionDatabase,
      new ResultDatabaseMock() as unknown as ResultDatabase,
      new IdGeneratorMock(),
      new AuthenticatorMock()
  )

  test("lista de resultados gerada com sucesso",async()=>{
    const input: IGetResultInputDTO = {
      competition_id: "201", 
  }     
  

  const response = await resultBusiness.getPartialResults(input)

  expect(response.message).toEqual("result created successfully")


  })

})