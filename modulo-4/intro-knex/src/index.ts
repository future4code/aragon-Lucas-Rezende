import express, { request, Request, RequestHandler, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { User } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`server it working in port ${process.env.PORT || 3003}`)
});

// Exercício 1

app.get("/users", async (req: Request, res:Response) => {
const errorCode = 400
try {
  const search = req.query.search as string
  
  if (search){
    const[result] = await connection.raw(`
  SELECT * FROM Funcionários
  WHERE LOWER(name) LIKE "%${search.toLowerCase()}%"; 
    `)

  return res.status(200).send({products:result})
  }

  const [result] = await connection.raw(`
  SELECT * FROM Funcionários;
  `)

  res.status(200).send({users:result})


  
} catch (error) {
  res.status(errorCode).send({message:error.message})
}
})

// Exercicio 2

app.post("/users", async (req:Request, res:Response) => {
  let errorCode = 400
try {
  
const {name,email} = req.body

const [ users ] = await connection.raw(`
    SELECT * FROM Funcionários
    WHERE email = "${email}";
    `)

    const userFound = users[0]

if (userFound) {
  errorCode = 404
  throw new Error("user already exist")
    }

if (name.length <= 4){
  res.statusCode = 422
  throw new Error("'name' must be longer than 4 characters'.")
    }

if (!name || !email){
  errorCode = 422
  throw new Error("missing parameters");
}
if (typeof email !== "string"){
  errorCode = 422
  throw new Error("email must be a string");
}

if (typeof name !== "string"){
  errorCode = 422
  throw new Error("name must be a string");
}

const newUser:User = {
  id : Date.now(),
  name : name,
  email : email
}

await connection.raw(`
INSERT INTO Funcionários
VALUES (${newUser.id},"${newUser.name}","${newUser.email}")
`)

res.status(200).send({message:"user created successfully",user:newUser})



} catch (error) {
 res.status(errorCode).send({message:error.message}) 
}
})

// Exercicio 3

app.put("/users/:id", async(req:Request,res:Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)
    
    const email = req.body.email
    
    const [ users ] = await connection.raw(`
    SELECT * FROM Funcionários
    WHERE id = ${id};
    `)

    const userFound = users[0]

    if (!userFound) {
      errorCode = 404
      throw new Error("user not found")
    }

    if (!email){
      errorCode = 422
      throw new Error("missing parameters");
    }
    
    if (typeof email !== "string"){
      errorCode = 422
      throw new Error("email must be a string");
    }

    if(email.includes("@") === false){
      errorCode = 422
      throw new Error("don't be a email valid");
    }
    
    await connection.raw(`
    UPDATE Funcionários
    SET email = "${email}"
    WHERE id = ${id};
    `)

    res.status(200).send({ mensagem: "email changed successfully" })

  } catch (error) {
    res.status(errorCode).send({message:error.message})
  }
})

// Exeercicio 4

app.delete("/users/:id", async (req:Request, res:Response)=>{
  let errorCode = 400
  try {
    const id = req.params.id

    const [ users ] = await connection.raw(`
    SELECT * FROM Funcionários
    WHERE id = ${id};
    `)

    const userFound = users[0]

    if (!userFound) {
      errorCode = 404
      throw new Error("user not found")
    }

    await connection.raw(`
    DELETE FROM Funcionários
    WHERE id = ${id};
    `)

    res.status(200).send({ mensagem: "user successfully deleted" })
    
  } catch (error) {
    res.status(errorCode).send({message:error.message})
  }
})