import { BaseDatabase } from "../BaseDatabase"
import { CompetitionDatabase } from "../CompetitionDataBase"
import { ResultDatabase } from "../ResultDatabase"
import { UserDatabase } from "../UserDatabase"
import { competitions, results, users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${ResultDatabase.TABLE_RESULTS};
        DROP TABLE IF EXISTS ${CompetitionDatabase.TABLE_COMPETITIONS};
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};
        
        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("ATHLETE", "ADMIN") NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${CompetitionDatabase.TABLE_COMPETITIONS}(
           id VARCHAR(255) PRIMARY KEY,
           competition ENUM("100m","Dardo") NOT NULL,
           stage VARCHAR(255) NOT NULL,
           status ENUM("DONE", "UNDONE") DEFAULT "UNDONE" NOT NULL
      );

        CREATE TABLE IF NOT EXISTS ${ResultDatabase.TABLE_RESULTS}(
            position INT NOT NULL DEFAULT 0,
            id VARCHAR(255) PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            competition_id VARCHAR(255) NOT NULL,
            value DECIMAL(5,3) NOT NULL,
            unit VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES ${UserDatabase.TABLE_USERS}(id),   
            FOREIGN KEY (competition_id) REFERENCES ${CompetitionDatabase.TABLE_COMPETITIONS}(id)   
        );


      `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(users)

        await BaseDatabase
            .connection(CompetitionDatabase.TABLE_COMPETITIONS)
            .insert(competitions)

        await BaseDatabase
            .connection(ResultDatabase.TABLE_RESULTS)
            .insert(results)

    }
}

const migrations = new Migrations()
migrations.execute()