import { Request, Response } from "express";
import connection from "../database/connection";
import { products } from "../database/data";
import { TABLE_PRODUCTS } from "../database/tableNames";

export const postNewProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
       const name = req.body.name
 
       const price = Number(req.body.price)

       const [ result ] = await connection
       .raw(`SELECT * FROM ${TABLE_PRODUCTS};`)

       const productId = result.length + 1

       const id = `product${productId}`


       await connection.raw(`
       INSERT INTO ${TABLE_PRODUCTS}
       (id,name,price)
       VALUES ("${id}","${name}",${price})
       `)


    res.status(200).send({
      message:"Product created",
      })

        res.status(200).send({ })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}