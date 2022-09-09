import { CompetitionDatabase } from "../database/CompetitionDataBase";
import { ResultDatabase } from "../database/ResultDatabase";
import { RequestError } from "../errors/RequestError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { STATUS } from "../models/competition";
import {
  ICreateResultInputDTO,
  ICreateResultOutputDTO,
  IGetResultInputDTO,
  Result,
} from "../models/Result";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class ResultBusiness {
  constructor(
    private competitionDataBase: CompetitionDatabase,
    private resultDatabase: ResultDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  public createResult = async (input: ICreateResultInputDTO) => {
    const { token, competition_id, user_id, value, unit } = input;

    const payload = this.authenticator.getTokenPayload(token);

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new UnauthorizedError("only admins can create competitions");
    }

    if (!payload) {
      throw new UnauthorizedError("not authenticated");
    }

    const athlete = await this.resultDatabase.findById(user_id);

    if (athlete.length === 3) {
      throw new UnauthorizedError("athlete has already made 3 launches");
    }

    const competition = await this.competitionDataBase.findCompetitionById(
      competition_id
    );

    if (competition[0].status === STATUS.DONE) {
      throw new RequestError("competition ended");
    }

    if (typeof competition_id !== "string") {
      throw new RequestError("invalid 'competition' parameter");
    }

    const id = this.idGenerator.generate();

    const resultCreated = new Result(
      0,
      id,
      user_id,
      competition_id,
      value,
      unit
    );

    await this.resultDatabase.createResult(resultCreated);

    const response: ICreateResultOutputDTO = {
      message: "result created successfully",
      result: resultCreated,
    };

    return response;
  };

  public getResults = async (input: IGetResultInputDTO) => {
    const { competition_id } = input;

    const competition = await this.competitionDataBase.findCompetitionById(
      competition_id
    );

    if (competition[0].status === STATUS.UNDONE) {
      throw new RequestError("competition is in progress");
    }

    const results100mDB = await this.resultDatabase.getResults100metros(
      competition_id
    );

    const resultsDardoDB = await this.resultDatabase.getResultsDardos(
      competition_id
    );

    switch (competition[0].competition) {
      case "100m":
        for (let el of results100mDB) {
          el.posicao = results100mDB.indexOf(el) + 1;
        }
        return {
          message: "result list",
          reesults: results100mDB
        };
      case "Dardo":
        for (let el of resultsDardoDB) {
          el.posicao = resultsDardoDB.indexOf(el) + 1;
        }
        return {
          message: "result list",
          reesults: resultsDardoDB
        };
      default:
        throw new RequestError("invalid 'competition' parameter");
    }
  };

  public getPartialResults = async (input: IGetResultInputDTO) => {
    const { competition_id } = input;

    const competition = await this.competitionDataBase.findCompetitionById(
      competition_id
    );

    const results100mDB = await this.resultDatabase.getResults100metros(
      competition_id
    );

    const resultsDardoDB = await this.resultDatabase.getResultsDardos(
      competition_id
    );

    switch (competition[0].competition) {
      case "100m":
        for (let el of results100mDB) {
          el.posicao = results100mDB.indexOf(el) + 1;
        }
        return {
          message: "partial result list",
          reesults: results100mDB
        };
      case "Dardo":
        for (let el of resultsDardoDB) {
          el.posicao = resultsDardoDB.indexOf(el) + 1;
        }
        return {
          message: "partial result list",
          reesults: resultsDardoDB
        };
      default:
        throw new RequestError("invalid 'competition' parameter");
    }
  };
}
