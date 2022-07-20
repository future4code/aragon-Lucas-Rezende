import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const putNewPrice = async (req:Request, res:Response) => {
  let errorCode = 400
  try {

    const perfumeId = req.params.perfumeId

    const price = req.body.price

    // const [ perfumes ] = await connection.raw(`
    // SELECT * FROM ${TABLE_PERFUMES}
    // WHERE id = "${perfumeId}";
    // `)
    
    const perfumes = await connection(TABLE_PERFUMES)
    .select()
    .where("id", "=", `${perfumeId}`)

    const perfumeFound = perfumes[0]

    if (!perfumeFound) {
      errorCode = 404
      throw new Error("perfume does not exist")
    }  

    if ( typeof price !== "number" ) {
      errorCode = 404
      throw new Error("'price' must to be a number")
    }  


    // await connection.raw(`
    // UPDATE ${TABLE_PERFUMES}
    // SET price = ${price}
    // WHERE id = "${perfumeId}";
    // `)

    await connection(TABLE_PERFUMES)
    .update({
        price: price
    })
    .where({
        id: perfumeId
    })
    res.status(200).send({ mensagem: "new price changed" })

  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
} 