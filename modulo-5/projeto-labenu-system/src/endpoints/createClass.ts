import { Request, Response } from "express"
import { ClassDatabase } from "../database/ClassDatabase"
import { Classroom, IClassroomDB, MODULE } from "../models/classroom"

export const createClass = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const module:MODULE = req.body.module

        if (!name || !module) {
            throw new Error("Body inválido.")
        }


        const classroom:IClassroomDB ={
            id:Date.now().toString(),
            name:name,
            module:module
        }
        

        const classDatabase = new ClassDatabase()
        await classDatabase.createClass(classroom)


        res.status(201).send({ message: "turma criada", turma: classroom })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
} 