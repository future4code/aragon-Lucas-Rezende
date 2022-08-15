import { Request, response, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
        const userBusiness = new UserBusiness()
        const response = await userBusiness.signup({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        
        res.status(201).send(response)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

public login = async (req: Request, res: Response) => {
  try {
      const userBusiness = new UserBusiness()
      const response = await userBusiness.login({
          email: req.body.email,
          password: req.body.password
      })

      res.status(200).send(response)
  } catch (error) {
      res.status(400).send({ message: error.message })
  }
}

public getAllUsers = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
      const userBusiness = new UserBusiness()
      const response = await userBusiness.getAllUsers({
        token: req.headers.authorization,
        search: req.query.search
    })
     

      res.status(200).send(response)
  } catch (error) {
      res.status(errorCode).send({ message: error.message })
  }
}

public deleteUser = async (req: Request, res: Response) => {
  let errorCode = 400
  try {

      const userDatabase = new UserBusiness()
      const response = await userDatabase.deleteUsers({
        token: req.headers.authorization,
        id: req.params.userId
    }) 

      res.status(200).send(response)
  } catch (error) {
      res.status(errorCode).send({ message: error.message })
  }
}


}