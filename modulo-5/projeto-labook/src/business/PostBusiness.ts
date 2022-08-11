import { PostDatabase } from "../database/PostDatabase"
import { IGetPostsOutputDTO, IGetPostsPost, IPostInputDTO, Post } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public createNewPost = async (input: IPostInputDTO) => {

             const token = input.token
             const content = input.content


          if (!token) {
            throw new Error("Token faltando")
        }

          const payload = this.authenticator.getTokenPayload(token)


          if (!content) {
              throw new Error("Parâmetro faltando")
          }

          if (typeof content !== "string") {
              throw new Error("Parâmetro 'title' deve ser uma string")
          }


          if (content.length < 1) {
              throw new Error("O parâmetro 'title' deve possuir ao menos 3 caracteres")
          }


          const id = this.idGenerator.generate()

          const post = new Post(
              id,
              content,
              payload.id
          )

          await this.postDatabase.createRcipe(post)

          const response = {
            message: "post criado com sucesso",
            Post
        }
  
        return response

  
  }
 public getAllPosts = async (input:any) => {
  const token = input.token

  const payload = this.authenticator.getTokenPayload(token)

  if (!payload) {
      throw new Error("Token inválido ou faltando")
  }

  const postsDB = await this.postDatabase.getAllPosts()

  const posts = postsDB.map(postDB => {
      const post = new Post(
          postDB.id,
          postDB.content,
          postDB.user_id
      )

      const postResponse: IGetPostsPost = {

          content: post.getContent(),

      }

      return postResponse
  })

  const response = {
      posts
  }

  return response
}

 }