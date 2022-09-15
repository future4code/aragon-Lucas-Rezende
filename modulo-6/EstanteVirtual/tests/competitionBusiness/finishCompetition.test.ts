
import { COMPETITION, ICreateCompetitionInputDTO, IFinishCompetitionInputDTO } from "../../src/models/competition"
import { CompetitionDatabaseMock } from "../mocks/competitionDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { CompetitionBusiness} from "../../src/business/CompetitionBusiness"
import { CompetitionDatabase } from "../../src/database/CompetitionDataBase"
import { BaseError } from "../../src/errors/BaseError"

describe("Testando finishCompetition", () => {
  const competitionBusiness = new CompetitionBusiness(
    new CompetitionDatabaseMock() as unknown as CompetitionDatabase,
    new IdGeneratorMock(),
    new AuthenticatorMock()
  )

  test("competição finalizada com sucesso",async()=>{
    const input: IFinishCompetitionInputDTO = {
      token: "token-astrodev",
      competition_id: "201",
      status: "DONE"
  }

  const response = await competitionBusiness.finishCompetition(input)

  expect(response.message).toEqual("competition finished successfully")


  })


  test("retorna erro quando token for inválido",async()=>{
   try { const input: IFinishCompetitionInputDTO = {
      token: "token",
      competition_id: "201",
      status: "DONE"
  }

  const response = await competitionBusiness.finishCompetition(input)

} catch (error:unknown) {
  if(error instanceof BaseError){
  expect(error.statusCode).toEqual(401)
  expect(error.message).toEqual("not authenticated")
  }
}

  })

  test("retorna erro quando a competição não existe",async()=>{
    try { const input: IFinishCompetitionInputDTO = {
       token: "token",
       competition_id: "203",
       status: "DONE"
   }
 
   const response = await competitionBusiness.finishCompetition(input)
 
 } catch (error:unknown) {
   if(error instanceof BaseError){
   expect(error.statusCode).toEqual(404)
   expect(error.message).toEqual("competition not found")
   }
 }
 
   })

})