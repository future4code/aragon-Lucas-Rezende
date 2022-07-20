import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const deletePerfume = async (req:Request, res:Response)=>{
  let errorCode = 400
  try {
    const id = req.params.perfumeId

    // const [ perfumes ] = await connection.raw(`
    // SELECT * FROM ${TABLE_PERFUMES}
    // WHERE id = "${id}";
    // `)

    const perfumes = await connection(TABLE_PERFUMES)
    .select()
    .where({ id })

    const perfumeFound = perfumes[0]

    if (!perfumeFound) {
      errorCode = 404
      throw new Error("perfume not found")
    }

    if (perfumeFound){
      // await connection.raw(`
      // DELETE FROM ${TABLE_PERFUMES}
      // WHERE Id = "${id}";
      // `)
    
      await connection(TABLE_PERFUMES)
      .delete()
      .where({ id })

    }

    res.status(200).send({ mensagem: "perfume successfully deleted" })

  } catch (error) {
    res.status(errorCode).send({message:error.message})
  }
} 