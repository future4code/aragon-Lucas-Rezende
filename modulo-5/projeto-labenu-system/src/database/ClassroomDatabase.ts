import { Classroom, IClassroomDB } from "../models/Classroom"
import { BaseDatabase } from "./BaseDatabase"
import { classrooms } from "./migrations/data"

export class ClassroomDatabase extends BaseDatabase {
    public static TABLE_CLASSROOMS = "Labe_Classrooms"

    public async getAllClassrooms() {
        const result = await BaseDatabase
            .connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .select()
        
        return result
    }

    public async createClassroom(classroom:IClassroomDB){
      await BaseDatabase.connection(ClassroomDatabase.TABLE_CLASSROOMS)
      .insert({
        id: classroom.id,
        name: classroom.name,
        module: classroom.module
      })
    }
  
    public async changeModuleClassroom(module:string,id:string){
      await BaseDatabase.connection(ClassroomDatabase.TABLE_CLASSROOMS)
      .update({
          module: module
      })
      .where({
          id: id
      })
    }

  }

