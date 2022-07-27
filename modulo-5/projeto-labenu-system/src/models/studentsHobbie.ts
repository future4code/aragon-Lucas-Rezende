export type TStudenthobbies = {
  student_id: string,
  hobbie_id:string
}

export class Studenthobbies {

  constructor(
      private student_id: string,
      private hobbie_id: string,
  ) {}

  public getStudent_id() {
      return this.student_id
  }

  public getHobbie_id() {
      return this.hobbie_id
  }

  public setStudents_id(newStudents_id: string) {
      this.student_id = newStudents_id
  }

  public setHobbie_id(newHobbie_id: string) {
      this.hobbie_id = newHobbie_id
  }

}