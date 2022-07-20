
import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const postNewPerfume = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
       const {name,brand,price,ml} = req.body

       const [ result ] = await connection
       .raw(`SELECT * FROM ${TABLE_PERFUMES};`)

       const id = Date.now()

       await connection.raw(`
       INSERT INTO ${TABLE_PERFUMES}
       (id,name,brand,price,ml)
       VALUES ("${id}","${name}","${brand}",${price},${ml})
       `)
       
    res.status(200).send({
      message:"Product created",
      })

        res.status(200).send({ })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
} 