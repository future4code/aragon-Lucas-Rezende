import { IStudentDB } from "../models/Student"
import { BaseDatabase } from "./BaseDatabase"
import { ClassroomDatabase } from "./ClassroomDatabase"

export class StudentDatabase extends BaseDatabase {
    public static TABLE_STUDENTS = "Labe_Students"
    public static TABLE_HOBBIES = "Labe_Hobbies"
    public static TABLE_STUDENTS_HOBBIES = "Students_Hobbies"

   
    
    public async getAllStudentByEmail(email:string) {
      const result = await BaseDatabase
          .connection(StudentDatabase.TABLE_STUDENTS)
          .select()
          .where({email})
      
      return result[0]
  }

    public async getAllStudentById(id:string) {
      const result = await BaseDatabase
          .connection(StudentDatabase.TABLE_STUDENTS)
          .select()
          .where({id})
      
      return result[0]
  }
    
    public async getAllStudents(query:string) {

      if (query){
      const result = await BaseDatabase
          .connection(StudentDatabase.TABLE_STUDENTS)
          .select()
          .where("name","=",`${query}`)
      
      return result}

      const result = await BaseDatabase
      .connection(StudentDatabase.TABLE_STUDENTS)
      .select()
  
  return result

  }

    public async createStudent(student:IStudentDB){
      await BaseDatabase.connection(StudentDatabase.TABLE_STUDENTS)
      .insert({
        id: student.id,
        name: student.name,
        email: student.email,
        birthdate: student.birthdate,
        classroom_id: student.classroom_id
      })
    }
  
    public async changeStudentClassroom(classroomId:string|null,id:string){
      await BaseDatabase.connection(StudentDatabase.TABLE_STUDENTS)
      .update({
          classroom_id:classroomId,
      })
      .where({
          id: id
      })
    } 
    
    public async getAllStudentsClassroom(classroomId:string|null) {
      const result = await BaseDatabase.connection.raw(`
        SELECT
            ${StudentDatabase.TABLE_STUDENTS}.name AS student,
            ${StudentDatabase.TABLE_STUDENTS}.id,
            ${StudentDatabase.TABLE_STUDENTS}.email,
            ${ClassroomDatabase.TABLE_CLASSROOMS}.name AS class
        FROM ${StudentDatabase.TABLE_STUDENTS}
        INNER JOIN ${ClassroomDatabase.TABLE_CLASSROOMS}
        ON ${StudentDatabase.TABLE_STUDENTS}.classroom_id = ${ClassroomDatabase.TABLE_CLASSROOMS}.id
        WHERE ${StudentDatabase.TABLE_STUDENTS}.classroom_id = ${classroomId};
         `)     
      return result
  }

  
}
