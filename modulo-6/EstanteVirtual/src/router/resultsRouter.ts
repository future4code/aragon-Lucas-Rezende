import { Router } from 'express'
import { ResultBusiness } from '../business/ResultBusiness'
import { ResultController } from '../controller/ResultController'
import { CompetitionDatabase } from '../database/CompetitionDataBase'
import { ResultDatabase } from '../database/ResultDatabase'
import { UserDatabase } from '../database/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'

export const resultsRouter = Router()

const resultsController = new ResultController(
    new ResultBusiness(
        new CompetitionDatabase(),
        new ResultDatabase(),
        new IdGenerator(),
        new Authenticator()
    )
)

resultsRouter.post("/create", resultsController.createResult)

resultsRouter.get("/:competition_id", resultsController.getResults)

resultsRouter.get("/partial/:competition_id", resultsController.getPartialResults)