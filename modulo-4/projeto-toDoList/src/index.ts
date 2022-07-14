import express, { Request, Response } from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import connection from "./database/connection";
import { responsibles } from "./database/data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

// Endpoint com o callback vindo por import da pasta endpoints
app.get("/ping", ping)

// Siga o exemplo do ping acima e monte seus endpoints abaixo!

// Pegar lista de usuários:

app.get("/users", async (req:Request,res:Response) => {
  let errorCode=400
  try {
    const search = req.query.search as string

    if(search){
    const [ result ] = await connection.raw(`
    SELECT * FROM Users
    WHERE LOWER(name) LIKE "%${search}%";
    `)
  return res.status(200).send({
    message:`users like ${search}`,
    users:result})  
  }

  const [result] = await connection.raw(`
  SELECT * FROM Users;
  `)
    
  res.status(200).send({
    message:`all users`,
    users:result})

  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
})

// Pegar tarefas:

app.get("/tasks", async (req:Request,res:Response) => {
  let errorCode=400
  try {
    const search = req.query.search as string

    if(search){
    const [ result ] = await connection.raw(`
    SELECT * FROM Tasks
    WHERE LOWER(title) LIKE "%${search}%";
    `)
  return res.status(200).send({
    message:`tasks like ${search}`,
    tasks:result})  
  }

  const [result] = await connection.raw(`
  SELECT * FROM Tasks;
  `)
    
  res.status(200).send({
    message:`all tasks`,
    tasks:result})

  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
})


// Pegar usuário reponsável pela tarefa

app.get("/tasks/:taskId/users", async (req:Request,res:Response) => {
  let errorCode = 400
  try {
    
  const taskId = Number(req.params.taskId)

  const [ tasks ] = await connection.raw(`
  SELECT * FROM Tasks
  WHERE id = ${taskId};
  `)

  const taskFound = tasks[0]

  if (!taskFound) {
    errorCode = 404
    throw new Error("task not found")
  }

  const responsible = await connection.raw(`
  SELECT
  Responsibles.taskId,
  Responsibles.userId
  FROM Responsibles
  JOIN Tasks
  ON Tasks.creatorUserId = Responsibles.userId
  WHERE Responsibles.taskId = ${taskId};
  `)

  res.status(200).send({ 
    message:`user of taskId ${taskId}`,
    user: responsible[0] })

  } catch (error) {
    res.status(errorCode).send({message:error.message})
  }
})

// Adicionar usuário responsável a uma tarefa:

app.post("/tasks/:taskId/users", async (req:Request,res:Response) => {
  let errorCode = 400

  try {
    
    const id = req.body.id

    const taskId = Number(req.params.taskId)
    
    const [ tasks ] = await connection.raw(`
    SELECT * FROM Tasks
    WHERE id = ${taskId};
    `)
  
    const taskFound = tasks[0]
  
    if (!taskFound) {
      errorCode = 404
      throw new Error("task not found")
    }  
    
    const [ repiteds ] = await connection.raw(`
    SELECT * FROM Responsibles
    WHERE Id = ${id};
    `)
  
    const repitedFound = repiteds[0]
  
    if (repitedFound>1) {
      errorCode = 404
      throw new Error("id já atribuida a task")
    }  

    await connection.raw(`
    INSERT INTO Responsibles
    VALUES (${id},${taskId})
    `)
    
    
    res.status(200).send({
      message:"responsible defined",
      create: `userId: ${id}, taskId:${taskId}` 
      })
    

  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
})