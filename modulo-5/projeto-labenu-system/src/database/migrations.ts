import { Studenthobbies } from "../models/studentsHobbie"
import connection from "./connection"
import { classrooms, hobbies, students, studentHobbies} from "./data"
import { TABLE_CLASS, TABLE_HOBBIES, TABLE_STUDENTS, TABLE_STUDENTS_HOBBIES } from "./tableNames"

const createTables = async () => {
    await connection.raw(`
DROP TABLE IF EXISTS ${TABLE_CLASS}, ${TABLE_STUDENTS}, ${TABLE_HOBBIES}, ${TABLE_STUDENTS_HOBBIES} ;

CREATE TABLE IF NOT EXISTS ${TABLE_CLASS}(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    module VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS ${TABLE_STUDENTS}(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    birthdate DATE NOT NULL,
    classroom_id VARCHAR(255),
    FOREIGN KEY (classroom_id) REFERENCES ${TABLE_CLASS}(id)
);

CREATE TABLE IF NOT EXISTS ${TABLE_HOBBIES}(
   id VARCHAR(255) PRIMARY KEY,
   title VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS ${TABLE_STUDENTS_HOBBIES}(
    student_id VARCHAR(255) NOT NULL,
    hobbie_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (student_id) REFERENCES ${TABLE_STUDENTS}(id),
    FOREIGN KEY (hobbie_id) REFERENCES ${TABLE_HOBBIES}(id)
);
    `)
    .then(() => {
        console.log(`Tables created successfully!`)
        insertData()
    })
    .catch((error: any) => printError(error))
}

const insertData = async () => {
    try {
        await connection(TABLE_CLASS)
            .insert(classrooms)
            .then(() => console.log(`${TABLE_CLASS} populated!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_STUDENTS)
            .insert(students)
            .then(() => console.log(`${TABLE_STUDENTS} populated!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_HOBBIES)
            .insert(hobbies)
            .then(() => console.log(`${TABLE_HOBBIES} populated!`))
            .catch((error: any) => printError(error))

       await connection(TABLE_STUDENTS_HOBBIES)
            .insert(studentHobbies)
            .then(() => console.log(`${TABLE_STUDENTS_HOBBIES} populated!`))
            .catch((error: any) => printError(error))

    } catch (error: any) {
        console.log(error.sqlMessage || error.message)
    } finally {
        console.log("Ending connection!")

        return connection.destroy()
    }
}

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
}

createTables()