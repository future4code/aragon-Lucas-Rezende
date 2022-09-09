import { Router } from 'express'
import { CompetitionBusiness } from '../business/CompetitionBusiness'
import { CompetitionController } from '../controller/CompetitionController'
import { CompetitionDatabase } from '../database/CompetitionDataBase'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'


export const competitionRouter = Router()

const competitionController = new CompetitionController(
    new CompetitionBusiness(
        new CompetitionDatabase(),
        new IdGenerator(),
        new Authenticator()
    )
)

competitionRouter.post("/create", competitionController.createCompetition)

competitionRouter.put("/:competition_id/finish", competitionController.finishCompetition)