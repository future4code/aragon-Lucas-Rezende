import { PostDatabase } from "../database/PostDatabase"
import { ICreateLikeInputDTO, IGetPostsOutputDTO, IGetPostsPost, IPostInputDTO, IPostOutPutDTO, Post } from "../models/Post"
import { USER_ROLES } from "../models/User"
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

          await this.postDatabase.createPost(post)

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

  const postsRes = await this.postDatabase.getAllPosts()

  const postDB:IPostOutPutDTO[] = JSON.parse( JSON.stringify(postsRes))

  const posts = postDB.map(postDB => {
      const post = {
          userId:postDB.userId,
          postId:postDB.postId,
          content:postDB.content,
          email:postDB.email,
          likes:postDB.likes
      }

      const postResponse = post

      return postResponse
  })

  const response = posts.map((post)=>{
    return {
      post_id:post.postId,
      email:post.email,
      content:post.content,
      likes:post.likes
    }
  })

  return response
}

public postLike = async (input: ICreateLikeInputDTO) => {
  
  const {token, postId} = input

  if (!token) {
      throw new Error("Token faltando")
  }


  const payload = this.authenticator.getTokenPayload(token)

  if (!payload) {
      throw new Error("Token inválido")
  }

  if (postId && typeof postId !== "string") {
      throw new Error("Parâmetro 'postId' inválido")
  }

  const postDB = await this.postDatabase.findById(postId)

  if (!postDB) {
    throw new Error("Post não encontrado")
}

 const postLikeDB = await this.postDatabase.findLikeById(postId)

  if (postLikeDB.user_id === postLikeDB.post_id) {
          throw new Error("Usuário não pode curtir mais de uma vez o mesmo post")

  }

  const like = {
     id:postLikeDB.id,
     post_id:postLikeDB.post_id,
     user_id:postLikeDB.user_id
  }


  await this.postDatabase.postLike(like)

  const response = {
      message: "curtiu"
  }

  return response
}
} 
