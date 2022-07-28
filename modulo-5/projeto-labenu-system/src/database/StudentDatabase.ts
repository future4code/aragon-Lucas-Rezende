import { IStudentDB } from "../models/Student"
import { BaseDatabase } from "./BaseDatabase"

export class StudentDatabase extends BaseDatabase {
    public static TABLE_STUDENTS = "Labe_Students"
    public static TABLE_HOBBIES = "Labe_Hobbies"
    public static TABLE_STUDENTS_HOBBIES = "Students_Hobbies"

   
    public async getAllStudents() {
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
  
      
    
  
}
