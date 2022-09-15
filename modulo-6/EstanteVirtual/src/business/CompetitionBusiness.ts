import { CompetitionDatabase } from "../database/CompetitionDataBase";
import { NotFoundError } from "../errors/NotFoundError";
import { RequestError } from "../errors/RequestError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { Competition, ICreateCompetitionInputDTO, ICreateCompetitionOutputDTO, IFinishCompetitionInputDTO, IFinishCompetitionOutputDTO, STATUS } from "../models/competition";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class CompetitionBusiness {
  constructor(
    private competitionDatabase: CompetitionDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  public createCompetition = async (input: ICreateCompetitionInputDTO) => {
    const { token, competition, stage } = input

    const payload = this.authenticator.getTokenPayload(token);

 
    if (!payload) {
      throw new UnauthorizedError("not authenticated");
    }

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new UnauthorizedError("only admins can create competitions");
    }

    if (typeof competition !== "string") {
      throw new RequestError("invalid 'competition' parameter");
    }

    if (stage.length < 3) {
      throw new RequestError("'stage' needs at least three character");
    }

    const id = this.idGenerator.generate();

    const competitionCreated = new Competition(id,competition, stage, STATUS.UNDONE);

    await this.competitionDatabase.createCompetition(competitionCreated);

    const response: ICreateCompetitionOutputDTO = {
      message: "competition created successfully",
      competition:competitionCreated,
    };

    return response;
  };

  public finishCompetition = async (input: IFinishCompetitionInputDTO) => {

    const { token, competition_id, status } = input;

    const payload = this.authenticator.getTokenPayload(token);

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new UnauthorizedError("only admins can finish competitions");
    }

    if (!payload) {
      throw new UnauthorizedError("not authenticated");
    }

    const competitionDB = await this.competitionDatabase.findCompetitionById(competition_id);


    if (competitionDB.length < 1) {
      throw new NotFoundError("competition not found");
    }
    
    await this.competitionDatabase.changeStatusCompetition(status, competition_id)

    const response: IFinishCompetitionOutputDTO = {
      message: "competition finished successfully",
    };

    return response;
  };

} 