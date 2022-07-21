import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";

export const postNewProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
       const name = req.body.name

       const price = req.body.price

       const id = Date.now()

       await connection.raw(`
       INSERT INTO ${TABLE_PRODUCTS}
       (id,name,price)
       VALUES ("${id}","${name}",${price})
       `)

    res.status(200).send({
      message:"Product created",
      })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}  