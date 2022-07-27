import { BaseDatabase } from "./BaseDatabase";

export class StudentsDatabase extends BaseDatabase {
    public static TABLE = "Labe_Students"

    public async getAllStudents() {
        const result = await BaseDatabase
        .connection(StudentsDatabase.TABLE)
        .select()

        return result
    }}
