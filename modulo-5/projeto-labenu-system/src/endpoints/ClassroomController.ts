import { Request, Response } from "express";
import { BaseDatabase } from "../database/BaseDatabase";
import { ClassroomDatabase } from "../database/ClassroomDatabase";
import { IClassroomDB } from "../models/Classroom";

export class ClassroomController extends BaseDatabase {
    public static TABLE_CLASSROOMS = "Labe_Classrooms"  
    
    public async getAllClassrooms(req: Request, res: Response) {
        let errorCode = 400
        try {

          const active:string = "0"

            const classroomDatabase = new ClassroomDatabase()
            const result = await classroomDatabase.getAllClassroomsActive(active)

            res.status(200).send({ classrooms: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async createClassroom(req: Request, res: Response) {
      let errorCode = 400
      try {
        const name = req.body.name
        const module = req.body.module

        const findClass = new ClassroomDatabase()
        const result = await findClass.getAllClassroomByName(name)
         
        if(result.length !== 0){
          errorCode = 404
          throw new Error("classroom name alredy existe.")
        }

        if (!name || !module) {
            throw new Error("invalid body.")
        }


        const classroom:IClassroomDB ={
            id:Date.now().toString(),
            name:name,
            module:module
        }


        const classroomDatabase = new ClassroomDatabase()
        await classroomDatabase.createClassroom(classroom)


        res.status(201).send({ message: "classroom created!", turma: classroom })
      } catch (error) {
          res.status(errorCode).send({ message: error.message })
      }
  }

  public async changeModuleClassroom(req: Request, res: Response) {
    let errorCode = 400
    try {
      const classroomId = req.params.classroomId

      const module = req.body.module

      const findClass = new ClassroomDatabase()
      
      const result = await findClass.getClassroomById(classroomId)

      if(result.module === module){
        errorCode = 404
        throw new Error("classroom is already in this module")
      }

      if (!result) {
        errorCode = 404
        throw new Error("classroom does not exist")
      }  
  
      if ( typeof module !== "string" ) {
        errorCode = 404
        throw new Error("'module' must to be a string")

      }  
  
      const classroomDatabase = new ClassroomDatabase()
      await classroomDatabase.changeModuleClassroom(module,classroomId)

      res.status(201).send({ message: `classroom ${result.name} module changed to ${module}` })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
}