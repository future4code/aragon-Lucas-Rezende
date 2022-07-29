import { Request, Response } from "express";
import { BaseDatabase } from "../database/BaseDatabase";
import { ClassroomDatabase } from "../database/ClassroomDatabase";
import { StudentDatabase } from "../database/StudentDatabase";
import { IStudentDB } from "../models/Student";
import { ClassroomController } from "./ClassroomController";

export class StudentController extends BaseDatabase  {
    public static TABLE_STUDENTS = "Labe_Students"  
    
    public async getAllStudents(req: Request, res: Response) {
      let errorCode = 400
      try {

        const query = req.query.name as string

          const studentDatabase = new StudentDatabase()
          const result = await studentDatabase.getAllStudents(query)


          
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

        const findStuddent = new StudentDatabase()
      
        const studentEmail = await findStuddent.getAllStudentByEmail(email)

        const studentEmailFound = studentEmail

        const findname = new ClassroomDatabase()

        const classroom = await findname.getAllClassroomsId(classroom_id)

        if (studentEmailFound) {
          errorCode = 404
          throw new Error("email alredy exist")
        }  
    
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


        res.status(201).send({ 
          message: "student created!",
          classroom:classroom.name,
          student: student })
      } catch (error) {
          res.status(errorCode).send({ message: error.message })
      }
  }

  public async changeStudentClassroom(req: Request, res: Response) {
    let errorCode = 400
    try {
      const studentId = req.params.studentId

      const classroom_id = req.body.classroom_id

      const findClass = new ClassroomDatabase()
      
      const classroom = await findClass.getClassroomById(classroom_id)

      const findStuddent = new StudentDatabase()
      
      const student = await findStuddent.getAllStudentById(studentId)

      const studentFound = student 

      if(classroom_id === studentFound.classroom_id ){
        errorCode = 404
        throw new Error("student is already in this classroom")
      }

      if (!studentFound) {
        errorCode = 404
        throw new Error("classroom does not exist")
      }  
  
      if ( typeof classroom_id !== "string" ) {
        errorCode = 404
        throw new Error("'classroom_id' must to be a string")

      }  
  
      const studentsDatabase = new StudentDatabase()
      await studentsDatabase.changeStudentClassroom(classroom_id,studentId)

      res.status(201).send({ message: `student '${student.name}' changed to class '${classroom.name}'` })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}

  public async getAllStudentsClassroom(req: Request, res: Response) {
    let errorCode = 400
    try {

      const classroomId = req.params.classroomId

        const classroom = new ClassroomDatabase()
        const nameClassroom = await classroom.getAllClassroomsId(classroomId)
        const studentDatabase = new StudentDatabase()
        const result = await studentDatabase.getAllStudentsClassroom(classroomId)

        res.status(200).send({ 
        classroom: nameClassroom.name,
        result: result[0]})
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}

   

}