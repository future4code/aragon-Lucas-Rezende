import { Competition, ICompetitionDB, STATUS } from "../models/competition";
import { IResultsDB } from "../models/Result";
import { BaseDatabase } from "./BaseDatabase";
import { ResultDatabase } from "./ResultDatabase";

export class CompetitionDatabase extends BaseDatabase {
  public static TABLE_COMPETITIONS = "Table_Competitions";

  public toCompetitionDBModel = (competition: Competition) => {
    const competitionDB: ICompetitionDB = {
      id: competition.getId(),
      competition: competition.getCompetition(),
      stage: competition.getStage(),
      status: competition.getStatus(),
    };

    return competitionDB;
  };

  public createCompetition = async (competition: Competition) => {
    const competitionDB = this.toCompetitionDBModel(competition);

    await BaseDatabase.connection(
      CompetitionDatabase.TABLE_COMPETITIONS
    ).insert(competitionDB);
  };

  public findCompetitionById = async (competition_id: string): Promise<ICompetitionDB[] | undefined> => {
    const competitionDB: ICompetitionDB[] = await BaseDatabase
    .connection(CompetitionDatabase.TABLE_COMPETITIONS)
      .select()
      .where({ id : competition_id });
    return competitionDB;
  };

  public changeStatusCompetition = async (
    status: STATUS | string,
    competition_id: string
  ) => {
    await BaseDatabase.connection(CompetitionDatabase.TABLE_COMPETITIONS)
      .update({
        status,
      })
      .where({
        id : competition_id,
      });
  }

}
