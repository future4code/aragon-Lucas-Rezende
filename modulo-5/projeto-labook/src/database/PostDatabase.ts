import { ILikeDB, IPostDB, IPostInputDTO, IPostOutPutDTO, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"
import { UserDatabase } from "./UserDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"


    public createPost = async (post: Post) => {
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
    const postsDB: IPostOutPutDTO[] = await BaseDatabase.connection
    .raw(`
        SELECT
        ${PostDatabase.TABLE_POSTS}.id AS postId,
        ${UserDatabase.TABLE_USERS}.id AS userId,
        ${PostDatabase.TABLE_POSTS}.content,
        ${UserDatabase.TABLE_USERS}.email,
        COUNT (${PostDatabase.TABLE_LIKES}.id) AS likes
        FROM ${PostDatabase.TABLE_POSTS}
        LEFT JOIN ${UserDatabase.TABLE_USERS}
        ON ${PostDatabase.TABLE_POSTS}.user_id = ${UserDatabase.TABLE_USERS}.id
        LEFT JOIN ${PostDatabase.TABLE_LIKES}
        ON ${PostDatabase.TABLE_LIKES}.post_id = ${PostDatabase.TABLE_POSTS}.id
        GROUP BY postId, userId;
        `)


    return postsDB[0]
}

public findById = async (id: string) => {
  const postsDB: IPostDB[] = await BaseDatabase
      .connection(PostDatabase.TABLE_POSTS)
      .select()
      .where({ id })

  return postsDB[0]
}

public findLikeById = async (id: string) => {
  const postsDB: ILikeDB[] = await BaseDatabase
      .connection(PostDatabase.TABLE_LIKES)
      .select()
      .where({ post_id: id })

  return postsDB[0]
}

public postLike = async (like: ILikeDB) => {
  const likeDB: ILikeDB = {
      id: like.id,
      post_id: like.post_id,
      user_id: like.user_id
  }

  await BaseDatabase
      .connection(PostDatabase.TABLE_LIKES)
      .insert(likeDB)
}

public deletePost = async (id: string) => {
  await BaseDatabase
      .connection(PostDatabase.TABLE_LIKES)
      .delete()
      .where({ post_id:id })

      await BaseDatabase
      .connection(PostDatabase.TABLE_POSTS)
      .delete()
      .where({ user_id:id })
}

public removeLike = async (postId:string, userId:string) => {
    await BaseDatabase
    .connection(PostDatabase.TABLE_LIKES)
    .delete()
    .where("post_id", "=", `${postId}`)
    .andWhere("user_id", "=", `${userId}`)
}

} 
