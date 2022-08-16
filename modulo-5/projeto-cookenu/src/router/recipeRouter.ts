import { Router } from 'express'
import { RecipeController } from '../controller/RecipeController'

export const recipeRouter = Router()

const recipeController = new RecipeController()

recipeRouter.get("/", recipeController.getAllRecipes)
recipeRouter.post("/", recipeController.postNewRecipe)
recipeRouter.put("/:recipeId", recipeController.editRecipe)
recipeRouter.delete("/:recipeId", recipeController.deleteRecipe)