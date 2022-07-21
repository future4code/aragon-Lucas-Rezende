import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_USERS } from "../database/tableNames";

export const postNewUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
       const name = req.body.name

       const password = req.body.name

       const id = Date.now()

       await connection.raw(`
       INSERT INTO ${TABLE_USERS}
       (id,name,password)
       VALUES ("${id}","${name}","${password}")
       `)

    res.status(200).send({
      message:"User created",
      })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}  