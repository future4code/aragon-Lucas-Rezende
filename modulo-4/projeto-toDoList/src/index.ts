import express, { Request, Response } from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import connection from "./database/connection";
import { responsibles } from "./database/data";
import { STATUS_LIST } from "./types";


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
    WHERE LOWER(name) LIKE "%${search}%" OR LOWER(nickname) LIKE "%${search}%";
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
    WHERE LOWER(title) LIKE "%${search}%" OR LOWER(description) LIKE "%${search}%";
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
  Responsibles.userId,
  Users.nickname
  FROM 
  Users
  JOIN Responsibles
  ON Users.id = Responsibles.userId
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
    
    const userId = req.body.userId

    const taskId = Number(req.params.taskId)
    
    const [ tasks ] = await connection.raw(`
    SELECT * FROM Tasks
    WHERE id = ${taskId};
    `)
  
    const taskFound = tasks[0]
  
    if (!taskFound) {
      errorCode = 404
      throw new Error("task already exist")
    }  

    if (taskFound) {
      
      await connection.raw(`
      INSERT INTO Responsibles
      VALUES (${userId},${taskId});
      `)
    }  
    
    res.status(200).send({
      message:"responsible defined",
      create: `userId: ${userId}, taskId:${taskId}` 
      })
    

  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
})

//  Editar Apelido do Usuário

app.put("/users/:userId", async (req:Request, res:Response) => {
  let errorCode = 400
  try {
    
    const id = req.params.userId

    const nickname = req.body.nickname

    const [ users ] = await connection.raw(`
    SELECT * FROM Users
    WHERE id = ${id};
    `)
  
    const userFound = users[0]
  
    if (!userFound) {
      errorCode = 404
      throw new Error("user does not exist")
    }  

    if (typeof nickname !== "string") {
      errorCode = 404
      throw new Error("nickname must to be a string")
    }  

    if ( nickname.length < 4) {
      errorCode = 404
      throw new Error("nickname must to be more than 4 characters")
    }  

    await connection.raw(`
    UPDATE Users
    SET nickname = "${nickname}"
    WHERE id = ${id};
    `)

    res.status(200).send({ mensagem: "'nickname' changed successfully" })

  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
})

// Editar Status de uma Tarefa

app.put("/tasks/:taskId", async (req:Request, res:Response) => {
  let errorCode = 400
  try {
    
    const taskId = req.params.taskId

    const status:STATUS_LIST = req.body.status

    const [ tasks ] = await connection.raw(`
    SELECT * FROM Tasks
    WHERE id = ${taskId};
    `)
  
    const taskFound = tasks[0]
  
    if (!taskFound) {
      errorCode = 404
      throw new Error("task does not exist")
    }  

    if (status !== STATUS_LIST.TO_DO && status !== STATUS_LIST.DOING && status !== STATUS_LIST.DONE) {
      errorCode = 404
      throw new Error("'status' does not exist")
    }  
    

    await connection.raw(`
    UPDATE Tasks
    SET status = "${status}"
    WHERE id = ${taskId};
    `)

    res.status(200).send({ mensagem: "'status' changed successfully" })

  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
})

// Deletar uma tarefa

app.delete("/tasks/:taskId", async (req:Request, res:Response)=>{
  let errorCode = 400
  try {
    const taskId = req.params.taskId

    const [ tasks ] = await connection.raw(`
    SELECT * FROM Tasks
    WHERE id = ${taskId};
    `)

    const taskFound = tasks[0]

    if (!taskFound) {
      errorCode = 404
      throw new Error("task not found")
    }

    if (taskFound){
      await connection.raw(`
      DELETE FROM Responsibles
      WHERE taskId = ${taskId};
      `)
    }

    await connection.raw(`
    DELETE FROM Tasks
    WHERE id = ${taskId};
    `)

 

    res.status(200).send({ mensagem: "task successfully deleted" })

  } catch (error) {
    res.status(errorCode).send({message:error.message})
  }
}) 