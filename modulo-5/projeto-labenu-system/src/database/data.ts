import { IClassroomDB, MODULE } from "../models/classroom";
import { THobbie } from "../models/hobbies";
import { IStudentsDB} from "../models/students";
import { TStudenthobbies } from "../models/studentsHobbie";


export const students: IStudentsDB[] = [
    {
      id: "1",
      name: "lucas",
      email: "lucas@msn.com",
      birthdate:new Date("1990/04/26"),
      classroom_id:"11",
    },
]

export const classrooms: IClassroomDB[] = [
    {
      id: "11",
      name: "aragon",
      module:MODULE.MODULO_5
    }
]

export const hobbies: THobbie[] = [
    {
        id: "111",
        title:"vídeo game"
    }
]

export const studentHobbies: TStudenthobbies[] = [
  {
      student_id: "1",
      hobbie_id:"111"
  }
]