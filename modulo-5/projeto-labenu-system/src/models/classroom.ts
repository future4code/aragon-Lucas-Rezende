export interface IClassroomDB {
  id: string,
  name: string,
  module:MODULE
}

export enum MODULE  {
    NAO_COMECOU = "0",
    MODULO_1 = "1",
    MODULO_2 = "2",
    MODULO_3 = "3",
    MODULO_4 = "4",
    MODULO_5 = "5",
    MODULO_6 = "6",
}

export class Classroom {

  constructor(
      private id: string,
      private name: string,
      private students: string[],
      private module:MODULE
  ) {}

  public getId() {
      return this.id
  }

  public getName() {
      return this.name
  }

  public getStudents() {
      return this.students
  }
  public getModule() {
    return this.module
}

  public setId(newId: string) {
      this.id = newId
  }

  public setName(newName: string) {
      this.name = newName
  }

  public setStudents(newStudents: string[]) {
      this.students = newStudents
  }

  public setModule(newModule: MODULE) {
    this.module = newModule
}
}