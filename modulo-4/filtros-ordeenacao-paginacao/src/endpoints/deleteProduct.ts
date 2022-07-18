import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";

export const deleteProduct = async (req:Request, res:Response)=>{
  let errorCode = 400
  try {
    const id = req.params.productId

    const [ products ] = await connection.raw(`
    SELECT * FROM ${TABLE_PRODUCTS}
    WHERE id = "${id}";
    `)

    const productFound = products[0]

    if (!productFound) {
      errorCode = 404
      throw new Error("product not found")
    }

    if (productFound){
      await connection.raw(`
      DELETE FROM ${TABLE_PRODUCTS}
      WHERE Id = "${id}";
      `)
    }

    await connection.raw(`
    DELETE FROM Tasks
    WHERE id = "${id}";
    `)



    res.status(200).send({ mensagem: "product successfully deleted" })

  } catch (error) {
    res.status(errorCode).send({message:error.message})
  }
}