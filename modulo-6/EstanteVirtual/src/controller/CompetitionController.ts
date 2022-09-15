import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateCompetitionInputDTO, IFinishCompetitionInputDTO } from "../models/competition";

export class CompetitionController {
    constructor(
        private competitionBusiness: CompetitionBusiness
    ) {}

    public createCompetition = async (req: Request, res: Response) => {
      try {
          const input: ICreateCompetitionInputDTO = {
              token: req.headers.authorization,
              competition: req.body.competition,
              stage: req.body.stage
          }

          const response = await this.competitionBusiness.createCompetition(input)
          res.status(201).send(response)
      } catch (error: unknown) {
          if (error instanceof BaseError) {
              return res.status(error.statusCode).send({ message: error.message })
          }
          
          res.status(500).send({ message: "unexpected error creating competition" })
      }
  }

  public finishCompetition = async (req: Request, res: Response) => {
    try {
        const input: IFinishCompetitionInputDTO = {
            token: req.headers.authorization,
            competition_id: req.params.competition_id,
            status: req.body.status
        }

        const response = await this.competitionBusiness.finishCompetition(input)
        res.status(201).send(response)
    } catch (error: unknown) {
        if (error instanceof BaseError) {
            return res.status(error.statusCode).send({ message: error.message })
        }
console.log(error)
        res.status(500).send({ message: "unexpected error finishing competition" })
    }
}



} 