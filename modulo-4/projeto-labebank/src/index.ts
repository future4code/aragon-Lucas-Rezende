import express, { Request, Response } from "express"
import cors from "cors"
import { ClientAcount, clientList } from "./data"


const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003,()=>{
  console.log("server it working on port 3003")
})

app.post("/users",(req:Request,res:Response)=>{
  try {
    const{nome, CPF, dataDeNascimento} = req.body

    if (!nome){
      res.statusCode = 422
      throw new Error("'Name' is required!")
    }
    if (!CPF){
      res.statusCode = 422
      throw new Error("'CPF' is required!")
    }
    if (!dataDeNascimento){
      res.statusCode = 422
      throw new Error("'Data de nascimento' is required!")
    }
    if (typeof nome !== "string"){
      res.statusCode = 422
      throw new Error("type invalid of 'nome'.")
    }
    if (typeof CPF !== "string"){
      res.statusCode = 422
      throw new Error("type invalid of 'CPF'.")
    }
    if (typeof dataDeNascimento !== "string"){
      res.statusCode = 422
      throw new Error("type invalid of 'data de nascimento'.")
    }

    const dateInvert = new Date(dataDeNascimento)

    const actualDate = new Date

    const clientAge = Math.floor(
      (actualDate.getTime() - dateInvert.getTime())
      / 1000 / 60 / 60 / 24 / 365.25)
    
    const CPFindex = clientList.findIndex(client => client.CPF === CPF)

    if (CPFindex === -1 && clientAge >= 18 && nome.length > 3){
      const client: ClientAcount = {
        id:clientList.length + 1,
        nome:nome,
        CPF:CPF,
        dataDeNascimento: dataDeNascimento,
        listaDeContasPagas:[{
          valor:0,
          descrição:"",
          dataDePagamento:""
        }
        ]
      }

      clientList.push(client);

      res.status(201).send({
        message: "new client added succesfully",
        products: clientList,
      });
    }    
    else

    res.statusCode = 422
    throw new Error("client is not able to register.")

  } catch (error) {
    res.send({message: error.message})
  }
}) 

app.get("/users/:id", (req:Request,res:Response)=>{
  try {

  const id = Number(req.params.id)

  const idIndex = clientList.findIndex(client => client.id === id)

  if (idIndex === -1){
    res.statusCode = 422
    throw new Error("'id' does not exist.")
  }

  const listaDeContas = clientList[idIndex].listaDeContasPagas

  const saldo = listaDeContas[listaDeContas.length-1].valor

  res.status(201).send({
    message: "the client 'saldo' is:",
    products: saldo,
  });

  } catch (error) {
    
  }
})

app.put("/users/:id", (req:Request, res:Response)=>{
  try {
    
    const id = Number(req.params.id) ;

    const { valor, descricao, dataDePagamento } = req.body;

    const idIndex = clientList.findIndex(client => client.id === id)

    if (idIndex === -1){
      res.statusCode = 422
      throw new Error("'id' does not exist.")
    }

    const listaDeContas = clientList[idIndex].listaDeContasPagas

    const saldoAtualizado = listaDeContas[listaDeContas.length-1].valor + valor
  

  } catch (error) {
    
  }
}
)