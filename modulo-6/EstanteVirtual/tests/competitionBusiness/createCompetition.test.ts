
import { COMPETITION, ICreateCompetitionInputDTO } from "../../src/models/competition"
import { CompetitionDatabaseMock } from "../mocks/competitionDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { CompetitionBusiness} from "../../src/business/CompetitionBusiness"
import { CompetitionDatabase } from "../../src/database/CompetitionDataBase"


describe("Testando createCompetition", () => {
  const competitionBusiness = new CompetitionBusiness(
    new CompetitionDatabaseMock() as unknown as CompetitionDatabase,
    new IdGeneratorMock(),
    new AuthenticatorMock()
  )

  test("competição criada com sucesso",async()=>{
    const input: ICreateCompetitionInputDTO = {
      token: "token-astrodev",
      competition: COMPETITION.CEM_METROS,
      stage: "semi-final"
  }

  const response = await competitionBusiness.createCompetition(input)

  expect(response.message).toEqual("competition created successfully")


  })

})