export interface IPostDB {
    id: string,
    content: string,
    user_id: string
}

export interface ILikeDB {
    id: string,
    post_id: string,
    user_id: string
}

export interface IPostInputDTO {
  token:string,
  content: string
}

export class Post {
    constructor(
        private id: string,
        private content: string,
        private userId: string,
        private likes: number = 0
    ) {}

    public getId = () => {
        return this.id
    }

    public getContent = () => {
        return this.content
    }

    public getUserId = () => {
        return this.userId
    }

    public getLikes = () => {
        return this.likes
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setContent = (newContent: string) => {
        this.content = newContent
    }

    public setUserId = (newUserId: string) => {
        this.userId = newUserId
    }

    public setLikes = (newLikes: number) => {
        this.likes = newLikes
    }
}

export interface IGetPostsPost {

  content: string,

}

export interface IGetPostsOutputDTO {
  users: IGetPostsPost[]
}

export interface IPostOutPutDTO{
  userId:string,
  postId:string,
  content:string,
  email:string,
  likes:number
}

export interface ICreateLikeInputDTO {
  token: string,
  postId:string
}

export interface IDeletePostInputDTO {
  token: string,
  idToDelete: string
}

export interface IRemoveLikeInputDTO {
  token: string,
  postId:string
}

