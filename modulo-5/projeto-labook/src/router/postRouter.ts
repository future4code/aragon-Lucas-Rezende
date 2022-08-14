import { Router } from 'express'
import { PostBusiness } from '../business/PostBusiness'
import { PostController } from '../controller/PostController'
import { PostDatabase } from '../database/PostDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'

export const postRouter = Router()

const postController = new PostController(
  new PostBusiness(
new PostDatabase(),
new IdGenerator(),
new HashManager(),
new Authenticator()
))

postRouter.post("/:userId", postController.createNewPost)

postRouter.get("/", postController.getAllPosts)

postRouter.delete("/:idToDelete", postController.deletePost)

postRouter.post("/like/:postId", postController.postLike)

postRouter.delete("/like/:postId", postController.removeLike)