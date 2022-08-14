import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { ICreateLikeInputDTO, IDeletePostInputDTO, IPostInputDTO, IRemoveLikeInputDTO } from "../models/Post";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    public createNewPost = async (req: Request, res: Response) => {
      try {

          const input: IPostInputDTO = {
            token : req.headers.authorization,
            content : req.body.content
        }

        const response = await this.postBusiness.createNewPost(input)

          res.status(201).send(response)

      } catch (error) {
          res.status(400).send({ message: error.message })
      }
  }

  public getAllPosts = async (req: Request, res: Response) => {
    try {
      const input = {
          token: req.headers.authorization,
      }

      const response = await this.postBusiness.getAllPosts(input)

      res.status(200).send(response)
  } catch (error) {
      res.status(400).send({ message: error.message })
  }
}

public postLike = async (req: Request, res: Response) => {
  try {
      const input: ICreateLikeInputDTO = {
          token: req.headers.authorization,
          postId: req.params.postId
      }

      const response = await this.postBusiness.postLike(input)

      res.status(200).send(response)
  } catch (error) {
      res.status(400).send({ message: error.message })
  }
}

public deletePost = async (req: Request, res: Response) => {
  try {
      const input: IDeletePostInputDTO = {
          token: req.headers.authorization,
          idToDelete: req.params.idToDelete
      }

      const response = await this.postBusiness.deletePost(input)

      res.status(200).send(response)
  } catch (error) {
      res.status(400).send({ message: error.message })
  }
}

public removeLike = async (req: Request, res: Response) => {
  try {
      const input: IRemoveLikeInputDTO = {
          token: req.headers.authorization,
          postId: req.params.postId
      }

      const response = await this.postBusiness.removeLike(input)

      res.status(200).send(response)
  } catch (error) {
      res.status(400).send({ message: error.message })
  }
}

} 