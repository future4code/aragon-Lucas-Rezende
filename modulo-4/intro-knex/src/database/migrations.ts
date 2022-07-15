import connection from "./connection";

const createProductsTable = async () => {
    try {
        await connection.raw(`
        CREATE TABLE Funcionários (
        id BIGINT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
        );
        `)

        console.log("product table created successfully.")
    } catch (error) {
        console.log("error creating table.")
        console.log(error.sqlMessage)
    }
}

async function populateProductsTable() {
    try {
        await connection.raw(`
            INSERT INTO Funcionários (id, name, email)
            VALUES
              (001,"Luana","lua@lbn.com"),
              (002,"Vinicius","vini@lbn.com"),
              (003,"Laura","lau@lbn.com"),
              (004,"lucas","lucas@lbn.com"); 
        `)
        
        console.log("successfully populated product table.")
    } catch (error) {
        console.log("error to populated table.")
        console.log(error.sqlMessage)
    }
}

createProductsTable()
.then(() => populateProductsTable())
.finally(() => process.exit())