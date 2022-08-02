import { Request, Response } from "express"
import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Auth_Users"
    public createUser = async(user:User) =>  {
         const userDB:IUserDB = {
          id:user.getId(),
          nickname:user.getNickname(),
          email:user.getEmail(),
          password:user.getPassword()
         }

         await BaseDatabase
         .connection(UserDatabase.TABLE_USERS)
         .insert(userDB)
    }

    public findEmail = async (email:string) => {
      const result : IUserDB[] = await BaseDatabase
      .connection(UserDatabase.TABLE_USERS)
      .select()
      .where({email})
      
      return result[0]
    }

    public getAllUsers = async (query:string) => {
      if (query){
        const result : IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where("nickname","like",`${query}`)

        return result

      }
      
      const result : IUserDB[] = await BaseDatabase
      .connection(UserDatabase.TABLE_USERS)
      .select()

      
      return result
    }

     public changeData = async (id:string,nickname:string,email:string,password:string) => {
      await BaseDatabase
      .connection(UserDatabase.TABLE_USERS)
      .select()
      .update({
        nickname : nickname,
        email: email,
        password: password
      })
      .where("id","=",`${id}`)
     }


}