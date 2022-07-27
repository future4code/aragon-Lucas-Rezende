import { Request, Response } from "express"
import { StudentsDatabase } from "../database/StudentsDatabase"

export const getStudents = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        // const result = await connection(TABLE_USERS).select()
      const userDatabase= new StudentsDatabase()
      const result = await userDatabase.getAllStudents()

        res.status(200).send({ students: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
} 