import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";

export const putNewPrice = async (req:Request, res:Response) => {
  let errorCode = 400
  try {

    const productId = req.params.productId

    const price = req.body.price

    const [ products ] = await connection.raw(`
    SELECT * FROM ${TABLE_PRODUCTS}
    WHERE id = "${productId}";
    `)

    const productFound = products[0]

    if (!productFound) {
      errorCode = 404
      throw new Error("product does not exist")
    }  

    if ( typeof price !== "number" ) {
      errorCode = 404
      throw new Error("'price' must to be a number")
    }  


    await connection.raw(`
    UPDATE ${TABLE_PRODUCTS}
    SET price = ${price}
    WHERE id = "${productId}";
    `)

    res.status(200).send({ mensagem: "new price changed" })

  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
}