import { Request, Response } from "express"
import { userInfo } from "os"
import { BaseDatabase } from "../database/BaseDatabase"
import { UserDatabase } from "../database/UserDatabase"
import { User } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class UserController {
    public signup = async (req:Request,res:Response) => {
      let errorCode = 400
      try {
        const nickname = req.body.nickname
        const email = req.body.email
        const password = req.body.password

        if (!nickname || !email || !password){
          errorCode = 401
          throw new Error("missing parameters")
        }

        if (typeof nickname !== "string"){
          errorCode = 401
          throw new Error("nickname must be of type string")
        }

        if (typeof email !== "string"){
          errorCode = 401
          throw new Error("email must be of type string")
        }

        if (typeof password !== "string"){
          errorCode = 401
          throw new Error("password must be of type string")
        }

        if(email.includes("@") === false){
          errorCode = 401
          throw new Error("email must be in correct format")
        }

        if (nickname.length <= 3 ){
          errorCode = 401
          throw new Error("nickname must to be more then 3 characters")
        }

        if (password.length <= 6 ){
          errorCode = 401
          throw new Error("password must to be more then 6 characters")
        }

        const userEmail = new UserDatabase()
        const emailFound = await userEmail.findEmail(email)

        if(emailFound){
          errorCode = 401
          throw new Error("this email is already registered")
        }

        const idGeneretor = new IdGenerator()
        const id = idGeneretor.generate()

        const user = new User(
          id,
          nickname,
          email,
          password
        )

        const userDataBase = new UserDatabase()
        await userDataBase.createUser(user)

        const payload : ITokenPayload = {
          id:user.getId()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        res.status(201).send({
          message:"registration done successfully",
          token: token
        })

      } catch (error) {
      res.status(errorCode).send({ message: error.message})
      }
    }

    public login = async (req:Request,res:Response) => {
      let errorCode = 400
      try {

        const email = req.body.email
        const password = req.body.password

        if(!email || !password){
          errorCode = 401
          throw new Error("email or password missing")
        }

        if (typeof email !== "string"){
          errorCode = 401
          throw new Error("email must be of type string")
        }

        if (typeof password !== "string"){
          errorCode = 401
          throw new Error("password must be of type string")
        }
        
        if(email.includes("@") === false){
          errorCode = 401
          throw new Error("email must be in correct format")
        } 

        if (password.length <= 6 ){
          errorCode = 401
          throw new Error("password must to be more then 6 characters")
        }

        const userDataBase = new UserDatabase()
        const userDB = await userDataBase.findEmail(email)

        if(!userDB){
          errorCode = 401
          throw new Error("email has not been registered")  
        }


        const user = new User (
          userDB.id,
          userDB.nickname,
          userDB.email,
          userDB.password
        )


        if(user.getPassword() !== password){
          errorCode = 401
          throw new Error("invalid password")  
        }

        const payload:ITokenPayload={
          id:user.getId()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        res.status(401).send({
          Message:"login successfully",
          token:token
        })


      } catch (error) {
        res.status(errorCode).send({message: error.message})
      }
    }

    public getAllUsers = async (req:Request,res:Response) => {
      let errorCode = 400
      try {

          const token = req.headers.authorization
          const query = req.query.q as string
          const authenticator = new Authenticator()
          const payload = authenticator.getTokenPayload(token)

          if(!payload){
            errorCode = 401
            throw new Error("missing or invalid token")  
          }
          
          const userDataBase = new UserDatabase()
          const usersDB = await userDataBase.getAllUsers(query)
          
          const users = usersDB.map((user)=>{
            return new User(
              user.id,
              user.nickname,
              user.email,
              user.password,
            ) 
          })

          res.status(401).send({users})
        
      } catch (error) {
        res.status(errorCode).send({message:error.message})
      }
    }

    
    public changeData = async (req:Request, res:Response) => {
      let errorCode = 400
      try {
           const nickname = req.body.nickname
           const email = req.body.email
           const password = req.body.password
           const token = req.headers.authorization
           const authenticator = new Authenticator()
           const payload = authenticator.getTokenPayload(token)
 
           if(!payload){
             errorCode = 401
             throw new Error("missing or invalid token")  
           }

           const userDataBase = new UserDatabase()
           await userDataBase.changeData(payload.id,nickname,email,password)

           res.status(401).send({
          message:"update user successfully",  
          })

      } catch (error) {
        res.status(errorCode).send({messagee: error.message})
      }
    }

}