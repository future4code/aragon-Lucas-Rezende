import { IResultOutOutDTO, IResultsDB, Result } from "../models/Result";
import { BaseDatabase } from "./BaseDatabase";
import { CompetitionDatabase } from "./CompetitionDataBase";
import { results } from "./migrations/data";
import { UserDatabase } from "./UserDatabase";

export class ResultDatabase extends BaseDatabase {
  public static TABLE_RESULTS = "Table_Results";

  public ResultDBModel = (result: Result) => {
    const resultDB: IResultsDB = {
      position: result.getPosition(),
      id: result.getId(),
      user_id: result.getUser_id(), 
      competition_id: result.getCompetition_id(),
      value: result.getValue(),
      unit: result.getUnit()
    };

    return resultDB;
  };

  public createResult = async (result: Result) => {
    const resultDB = this.ResultDBModel(result);

    await BaseDatabase.connection(ResultDatabase.TABLE_RESULTS).insert(resultDB);
  };

  public getResults100metros = async (competition_id:string) => {
    const resultDB: IResultsDB[] = await BaseDatabase.connection
    .raw(`
    SELECT
    ${ResultDatabase.TABLE_RESULTS}.position AS posicao,
    ${UserDatabase.TABLE_USERS}.name AS atleta,
    ${CompetitionDatabase.TABLE_COMPETITIONS}.competition AS competicao,
    ${CompetitionDatabase.TABLE_COMPETITIONS}.stage AS etapa,
    ${ResultDatabase.TABLE_RESULTS}.value AS tempo,
    ${ResultDatabase.TABLE_RESULTS}.unit AS unidade
    FROM ${ResultDatabase.TABLE_RESULTS}
    JOIN ${UserDatabase.TABLE_USERS}
    ON ${ResultDatabase.TABLE_RESULTS}.user_id = ${UserDatabase.TABLE_USERS}.id
    JOIN ${CompetitionDatabase.TABLE_COMPETITIONS}
    ON  ${ResultDatabase.TABLE_RESULTS}.competition_id = ${CompetitionDatabase.TABLE_COMPETITIONS}.id
    WHERE competition_id = ${competition_id}
    ORDER BY value ASC;
        `)

        const result:any = Object.values(JSON.parse(JSON.stringify(resultDB)));
        
        return result[0];

   }
  
  

  public getResultsDardos = async (competition_id:string) => {
    const resultDB: IResultsDB[] = await BaseDatabase.connection
    .raw(`
    SELECT
    ${ResultDatabase.TABLE_RESULTS}.position AS posicao,
    ${UserDatabase.TABLE_USERS}.name AS atleta,
    ${CompetitionDatabase.TABLE_COMPETITIONS}.competition AS competicao,
    ${CompetitionDatabase.TABLE_COMPETITIONS}.stage AS etapa,
    MAX(${ResultDatabase.TABLE_RESULTS}.value) AS distancia,
    ${ResultDatabase.TABLE_RESULTS}.unit AS unidade
    FROM ${ResultDatabase.TABLE_RESULTS}
    JOIN ${UserDatabase.TABLE_USERS}
    ON ${ResultDatabase.TABLE_RESULTS}.user_id = ${UserDatabase.TABLE_USERS}.id
    JOIN ${CompetitionDatabase.TABLE_COMPETITIONS}
    ON  ${ResultDatabase.TABLE_RESULTS}.competition_id = ${CompetitionDatabase.TABLE_COMPETITIONS}.id
    WHERE competition_id = ${competition_id}
    GROUP BY user_id, etapa, unidade, posicao
    HAVING MAX(${ResultDatabase.TABLE_RESULTS}.value)
    ORDER BY distancia DESC;
        `)
    

        const result:any = Object.values(JSON.parse(JSON.stringify(resultDB)));
        
        return result[0];
   }

   public findById = async (user_id: string): Promise<IResultsDB [] | undefined> => {
    const result: IResultsDB[] = await BaseDatabase
        .connection(ResultDatabase.TABLE_RESULTS)
        .select()
        .where({ user_id })
  
    return result
  }


}


