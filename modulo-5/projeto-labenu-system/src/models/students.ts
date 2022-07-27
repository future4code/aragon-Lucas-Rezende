export interface IStudentsDB {
  id: string,
  name: string,
  email: string,
  birthdate:Date,
  classroom_id:string,
}

export class Students {

  constructor(
      private id: string,
      private name: string,
      private email: string,
      private birthdate:Date,
      private classroom_Id:string,
      private hobbies:string[]
  ) {}

  public getId() {
      return this.id
  }

  public getName() {
      return this.name
  }

  public getEmail() {
    return this.email
  }
  
  public getBirthdate() {
    return this.birthdate
  }
  
  public getClassroomId() {
    return this.classroom_Id
  }

  public getHobbies() {
    return this.hobbies
  }

  public setId(newId: string) {
      this.id = newId
  }

  public setName(newName: string) {
      this.name = newName
  }

  public setEmail(newEmail: string) {
      this.email = newEmail
  }

  public setBirthdate(newBirthdate: Date) {
    this.birthdate = newBirthdate
}

  public setClassroomId(newClassroomId: string) {
    this.classroom_Id = newClassroomId
  }

  public setHobbies(newHobbies: string[]) {
    this.hobbies = newHobbies
  }

}