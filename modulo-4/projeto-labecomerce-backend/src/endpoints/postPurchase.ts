import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames";

export const postPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
       const user_id = req.body.user_id

       const product_id = req.body.product_id

       const quantity = req.body.quantity

       const [product] = await connection.raw(`
       SELECT * FROM ${TABLE_PRODUCTS}
       WHERE id LIKE ${product_id};
       `)

       const total_price =   quantity * Number(product[0].price)

       const id = Date.now()


       await connection.raw(`
       INSERT INTO ${TABLE_PURCHASES}
       (id,user_id,product_id,quantity,total_price)
       VALUES ("${id}","${user_id}",${product_id},${quantity},${total_price});
       `)

    res.status(200).send({
      message:"Purchase created",
      })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}  