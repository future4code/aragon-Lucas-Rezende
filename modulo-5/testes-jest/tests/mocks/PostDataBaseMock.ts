import { BaseDatabase } from "../../src/database/BaseDatabase"
import { ILikeDB, IPostDB, Post } from "../../src/models/Post"

export class PostDatabaseMock extends BaseDatabase {
  public static TABLE_POSTS = "Labook_Posts"
  public static TABLE_LIKES = "Labook_Likes"

  public toPostDBModel = (post: Post) => {

  }

  public createPost = async (post: Post) => {

  }

  public getPosts = async () => {
    const posts: IPostDB[] = [
      {
          id: "201",
          content: "Olá, sou novo por aqui!",
          user_id: "101"
      },
      {
          id: "202",
          content: "Bom dia, família!",
          user_id: "102"
      },
      {
          id: "203",
          content: "Receba!",
          user_id: "103"
      }
  ]

  return posts
  }

  public getLikes = async (postId: string) => {
    switch (postId){
      case "201":
          return 3
      default:
          return 0
    }
}


  public findPostById = async (postId: string) => {

  }

  public deletePost = async (postId: string) => {

  }

  public findLike = async (postId: string, userId: string) => {

  }

  public addLike = async (likeDB: ILikeDB) => {

  }

  public removeLike = async (postId: string, userId: string) => {

 }}