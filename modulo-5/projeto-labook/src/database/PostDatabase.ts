import { IPostDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"
import { UserDatabase } from "./UserDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"


    public createRcipe = async (post: Post) => {
      const postDB: IPostDB = {
          id: post.getId(),
          content: post.getContent(),
          user_id: post.getUserId()
      }

      await BaseDatabase
          .connection(PostDatabase.TABLE_POSTS)
          .insert(postDB)
  }

  public getAllPosts = async () => {
    const postsDB: IPostDB[] = await BaseDatabase.connection
    .raw(`
        SELECT
        ${PostDatabase.TABLE_POSTS}.content,
        ${UserDatabase.TABLE_USERS}.email,
        ${PostDatabase.TABLE_LIKES}.likes
        FROM ${PostDatabase.TABLE_POSTS}
        JOIN ${UserDatabase.TABLE_USERS}
        ON ${PostDatabase.TABLE_POSTS}.user_id = ${UserDatabase.TABLE_USERS}.id
        JOIN ${PostDatabase.TABLE_POSTS}
        ON ${PostDatabase.TABLE_LIKES}.post_id = ${PostDatabase.TABLE_POSTS}.id;
        `)


    return postsDB
}

}