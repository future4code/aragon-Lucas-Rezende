import { deepStrictEqual } from "assert";
import { Request, Response } from "express";
import { deserialize } from "v8";
import { RecipeDatabase } from "../database/RecipeDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { Recipe } from "../models/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { UserController } from "./UserController";

export class RecipeController {
    public getAllRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization

            if (!token) {
                errorCode = 401
                throw new Error("Token faltando")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token inválido")
            }

            const recipeDatabase = new RecipeDatabase()
            const recipesDB = await recipeDatabase.getAllRecipes()

            const recipes = recipesDB.map((recipeDB) => {
                return new Recipe(
                    recipeDB.id,
                    recipeDB.title,
                    recipeDB.description,
                    recipeDB.created_at,
                    recipeDB.updated_at,
                    recipeDB.creator_id
                )
            })

            res.status(200).send({ recipes })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public postNewRecipe = async (req: Request, res: Response) => {
      let errorCode = 400
      try {

          const token = req.headers.authorization
          const title = req.body.title
          const description = req.body.description

          if (!token) {
            errorCode = 401
            throw new Error("Token faltando")
        }

          const authenticator = new Authenticator()
          const payload = authenticator.getTokenPayload(token)

          if (!title || !description) {
              throw new Error("Parâmetros faltando")
          }

          if (typeof title !== "string") {
              throw new Error("Parâmetro 'nickname' deve ser uma string")
          }

          if (typeof description !== "string") {
              throw new Error("Parâmetro 'email' deve ser uma string")
          }

          if (title.length < 3) {
              throw new Error("O parâmetro 'title' deve possuir ao menos 3 caracteres")
          }

          if (description.length < 6) {
              throw new Error("O parâmetro 'description' deve possuir ao menos 6 caracteres")
          }

          const idGenerator = new IdGenerator()
          const id = idGenerator.generate()

          const recipe = new Recipe(
              id,
              title,
              description,
              new Date(),
              new Date(),
              payload.id
          )

          const recipeDatabase = new RecipeDatabase()
          await recipeDatabase.createRcipe(recipe)

          res.status(201).send({
            message: "receita criada com sucesso",
            recipe
        })

      } catch (error) {
          res.status(errorCode).send({ message: error.message })
      }
  }


  public editRecipe = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const token = req.headers.authorization
        const id = req.params.recipeId
        const title = req.body.title
        const description = req.body.description

        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        const recipeIdDatabase = new RecipeDatabase()
        const recipeIdExists = await recipeIdDatabase.findById(id)

        if (!recipeIdExists) {
          errorCode = 401
          throw new Error("receita não existe")
      }

        if (!payload) {
            errorCode = 401
            throw new Error("Token faltando ou inválido")
        }

        if (!title && !description) {
            throw new Error("Parâmetro faltando")
        }

        if (title && typeof title !== "string") {
            throw new Error("Parâmetro 'nickname' deve ser uma string")
        }

        if (description && typeof description !== "string") {
            throw new Error("Parâmetro 'email' deve ser uma string")
        }

        if (title && title.length < 3) {
            throw new Error("O parâmetro 'nickname' deve possuir ao menos 3 caracteres")
        }

        if (description && description.length < 10) {
            throw new Error("O parâmetro 'password' deve possuir ao menos 6 caracteres")
        }

        const userDatabase = new UserDatabase()
        const isUserExists = await userDatabase.checkIfExistsById(payload.id)

        if (!isUserExists) {
            errorCode = 401
            throw new Error("Token inválido")
        }

        if (payload.role === "ADMIN") {

        const recipeDB = await recipeIdDatabase.findById(id)
        const recipe = new Recipe(
            recipeDB.id,
            recipeDB.title,
            recipeDB.description,
            recipeDB.created_at,
            recipeDB.updated_at,
            recipeDB.creator_id
        )

        title && recipe.setTitle(title)
        description && recipe.setDescription(description)

        const recipeDataBase = new RecipeDatabase()
        await recipeDataBase.editRecipe(recipe)

        res.status(201).send({
            message: "Edição realizada com sucesso",
            recipe
        })}

        if (payload.role === "NORMAL") {
          if(id === payload.id){

            const recipeDB = await recipeIdDatabase.findById(id)
            const recipe = new Recipe(
                recipeDB.id,
                recipeDB.title,
                recipeDB.description,
                recipeDB.created_at,
                recipeDB.updated_at,
                recipeDB.creator_id
            )
    
            title && recipe.setTitle(title)
            description && recipe.setDescription(description)
    
            const recipeDataBase = new RecipeDatabase()
            await recipeDataBase.editRecipe(recipe)
    

          res.status(201).send({
              message: "Edição realizada com sucesso",
              recipe
          })}
          errorCode = 401
          throw new Error("somente ADMIN pode alterar receitas de  outros usuários")
        }

    } catch (error) {
        if (
            typeof error.message === "string"
            && error.message.includes("Duplicate entry")
        ) {
            return res.status(400).send("Email already taken")
        }
        res.status(errorCode).send({ message: error.message })
    }
}

public deleteRecipe = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
      const token = req.headers.authorization
      const id = req.params.recipeId

      const authenticator = new Authenticator()
      const payload = authenticator.getTokenPayload(token)

      if (!payload) {
          errorCode = 401
          throw new Error("Token faltando ou inválido")
      }

      const recipeDatabase = new RecipeDatabase()
      const userDataBase = new UserDatabase()
      const isUserExists = await userDataBase.findById(payload.id)

      const recipe = await recipeDatabase.findById(id)

      if (!isUserExists) {
          errorCode = 401
          throw new Error("usuário inexistente")
      }


      if(payload.role === "NORMAL"){
      if (recipe.creator_id === payload.id) {
        await recipeDatabase.deleteRecipe(payload.id)
      }
      errorCode = 401
      throw new Error("usuário 'NORMAL' não pode deletar uma rceita a não ser a sua. ")
    }      
    if(payload.role === "ADMIN"){
     await recipeDatabase.deleteRecipe(id)
}

    res.status(200).send({
    message: "receita deletada com sucesso"
})
  } catch (error) {
      res.status(errorCode).send({ message: error.message })
  }
}
 

  }