import { Request, Response } from "express";
import { BaseDatabase } from "../database/BaseDatabase";
import { StudentDatabase } from "../database/StudentDatabase";
import { IStudentDB } from "../models/Student";

export class StudentController   {
    public static TABLE_CLASSROOMS = "Labe_Classrooms"  
    
    public async getAllStudents(req: Request, res: Response) {
      let errorCode = 400
      try {
          const studentDatabase = new StudentDatabase()
          const result = await studentDatabase.getAllStudents()

          res.status(200).send({ classrooms: result })
      } catch (error) {
          res.status(errorCode).send({ message: error.message })
      }
  }


    public async createStudent(req: Request, res: Response) {
      let errorCode = 400
      try {

        const name = req.body.name
        const email = req.body.email
        const birthdate = req.body.birthdate
        const classroom_id = req.body.classroom_id

        if (!name || !email || !birthdate || !classroom_id) {
            throw new Error("invalid body.")
        }


        const student:IStudentDB ={
            id:Date.now().toString(),
            name: name,
            email: email,
            birthdate: new Date(birthdate),
            classroom_id: classroom_id
            
            
        }

        const studentDatabase = new StudentDatabase()
        await studentDatabase.createStudent(student)


        res.status(201).send({ message: "student created!", turma: student })
      } catch (error) {
          res.status(errorCode).send({ message: error.message })
      }
  }}