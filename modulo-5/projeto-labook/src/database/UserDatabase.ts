
import { IDeleteUserInputDTO, IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"
import { PostDatabase } from "./PostDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Labook_Users"

   public findByEmail = async (email: string) => {
        const usersDB: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ email })

        return usersDB[0]
    }

    public createUser = async (user: User) => {
      const userDB: IUserDB = {
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword(),
          role: user.getRole()
      }
      
      await BaseDatabase
      .connection(UserDatabase.TABLE_USERS)
      .insert(userDB)

}
public deletePost = async (id: string) => {
  await BaseDatabase
      .connection(PostDatabase.TABLE_LIKES)
      .delete()
      .where({ user_id:id })

      await BaseDatabase
      .connection(PostDatabase.TABLE_POSTS)
      .delete()
      .where({ user_id:id })
}

public findById = async (id: string) => {
  const usersDB: IUserDB[] = await BaseDatabase
      .connection(UserDatabase.TABLE_USERS)
      .select()
      .where({ id })

  return usersDB[0]
}

}