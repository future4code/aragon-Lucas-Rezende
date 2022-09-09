import { Request, Response } from "express";
import { ResultBusiness } from "../business/ResultBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateResultInputDTO, IGetResultInputDTO } from "../models/Result";

export class ResultController {
    constructor(
        private resultBusiness: ResultBusiness
    ) {}

    public createResult = async (req: Request, res: Response) => {
      try {
          const input: ICreateResultInputDTO = {
              token: req.headers.authorization,
              competition_id: req.body.competition_id, 
              user_id: req.body.user_id, 
              value: req.body.value, 
              unit: req.body.unit
          }

          const response = await this.resultBusiness.createResult(input)
          res.status(201).send(response)
      } catch (error: unknown) {
          if (error instanceof BaseError) {
              return res.status(error.statusCode).send({ message: error.message })
          }

          res.status(500).send({ message: "unexpected error creating result" })
      }
  }

  
  public getResults = async (req: Request, res: Response) => {
    try {

        const input: IGetResultInputDTO = {
        competition_id: req.params.competition_id, 
    }     
    
        const response = await this.resultBusiness.getResults(input)
        res.status(200).send(response)
    } catch (error: unknown) {
        if (error instanceof BaseError) {
            return res.status(error.statusCode).send({ message: error.message })
        }
console.log(error)
        res.status(500).send({ message: "unexpected error searching results" })
    }
}

public getPartialResults = async (req: Request, res: Response) => {
  try {

      const input: IGetResultInputDTO = {
      competition_id: req.params.competition_id, 
  }     
  
      const response = await this.resultBusiness.getPartialResults(input)
      res.status(200).send(response)
  } catch (error: unknown) {
      if (error instanceof BaseError) {
          return res.status(error.statusCode).send({ message: error.message })
      }
console.log(error)
      res.status(500).send({ message: "unexpected error searching results" })
  }
}


} 
