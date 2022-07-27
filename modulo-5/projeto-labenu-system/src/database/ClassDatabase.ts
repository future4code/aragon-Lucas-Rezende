import { Classroom, IClassroomDB } from "../models/classroom";
import { BaseDatabase } from "./BaseDatabase";

export class ClassDatabase extends BaseDatabase {
  public static TABLE = "Labe_Classrooms"

  public async createClass(classroom:IClassroomDB){
    await BaseDatabase.connection(ClassDatabase.TABLE)
    .insert({
      id: classroom.id,
      name: classroom.name,
      module: classroom.module
    })
  }}