import { Classroom, IClassroomDB } from "../models/Classroom"
import { BaseDatabase } from "./BaseDatabase"
import { classrooms } from "./migrations/data"

export class ClassroomDatabase extends BaseDatabase {
    public static TABLE_CLASSROOMS = "Labe_Classrooms"
    
    public async getAllClassroomByName(query:string) {

      const result = await BaseDatabase
          .connection(ClassroomDatabase.TABLE_CLASSROOMS)
          .select()
          .where("name","=",`${query}`)
      
      return result
}

    public async getAllClassroomsId(id:string) {
      const result = await BaseDatabase
          .connection(ClassroomDatabase.TABLE_CLASSROOMS)
          .select()
          .where({id})
      
      return result[0]
  }

    public async getAllClassroomsActive(active:string) {
        const result = await BaseDatabase
            .connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .select()
            .where("module","!=",`${active}`)
        
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


    public async getClassroomById(id:string) {
      const result = await BaseDatabase
          .connection(ClassroomDatabase.TABLE_CLASSROOMS)
          .select()
          .where({id})
      
      return result[0]
  }


  }

