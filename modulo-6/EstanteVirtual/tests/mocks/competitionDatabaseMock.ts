import { BaseDatabase } from "../../src/database/BaseDatabase";
import { COMPETITION, Competition, ICompetitionDB, STATUS } from "../../src/models/competition";

export class CompetitionDatabaseMock extends BaseDatabase {
  public static TABLE_COMPETITIONS = "Table_Competitions";

  public toCompetitionDBModel = (competition: Competition) => {
    const competitionDB: ICompetitionDB = {
      id: competition.getId(),
      competition: competition.getCompetition(),
      stage:competition.getStage(),
      status:competition.getStatus()
  }

  return competitionDB
  };

  public createCompetition = async (competition: Competition) => {

  };

  public findCompetitionById = async (competition_id: string): Promise<ICompetitionDB[] | undefined> => {
  
    return [
      {
        id: "201",
        competition: COMPETITION.CEM_METROS,
        stage: "classificação",
        status: STATUS.UNDONE,
      }
    ]
  };

  public changeStatusCompetition = (status: STATUS | string, competition_id: string) => {
    
  }

}