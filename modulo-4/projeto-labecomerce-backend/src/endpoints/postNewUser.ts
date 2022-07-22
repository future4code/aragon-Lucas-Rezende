import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_USERS } from "../database/tableNames";

export const postNewUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
       const email = req.body.email

       const password = req.body.password

       const id = Date.now()

       await connection.raw(`
       INSERT INTO ${TABLE_USERS}
       (id,email,password)
       VALUES ("${id}","${email}","${password}")
       `)

    res.status(200).send({
      message:"User created",
      })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}  