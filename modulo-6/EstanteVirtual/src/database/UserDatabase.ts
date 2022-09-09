import { IUserDB, User, USER_ROLES } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"
import { CompetitionDatabase } from "./CompetitionDataBase"
import { ResultDatabase } from "./ResultDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Table_Olympics_Users"

    public toUserDBModel = (user: User) => {
      const userDB: IUserDB = {
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword(),
          role: user.getRole()
      }

      return userDB
  }
  
  public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
    const result: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where({ email })

    return result[0]
}

public findById = async (user_id: string): Promise<IUserDB | undefined> => {
  const result: IUserDB[] = await BaseDatabase
      .connection(UserDatabase.TABLE_USERS)
      .select()
      .where({ user_id })

  return result[0]
}


  public createUser = async (user: User) => {
    const userDB = this.toUserDBModel(user)

    await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .insert(userDB)
}

public getAthletes100m = async () => {
  const resultDB: IUserDB[] = await BaseDatabase.connection
  .raw(`
  SELECT
  ${UserDatabase.TABLE_USERS}.name AS atleta,
  ${UserDatabase.TABLE_USERS}.id
  FROM ${UserDatabase.TABLE_USERS}
  WHERE role = "${USER_ROLES.ATHLETE}";
      `)

      const result:any = Object.values(JSON.parse(JSON.stringify(resultDB)));
      
      return result[0];

}


} 
