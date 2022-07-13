import express, { Request, Response } from "express"
import cors from "cors"
import { ClientAcount, clientList, PaidAcount } from "./data"


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

    function calculateYears(dataInvert: string): number {
        const dateInvert = new Date(dataInvert)
        const dateAtual = new Date
        const age = Math.floor(
            (dateAtual.getTime() - dateInvert.getTime())
            / 1000 / 60 / 60 / 24 / 365.25
        )
    
        return age
    }

    const dataNascInvert = dataDeNascimento.split("/").reverse().join("/")

    const CPFindex = clientList.findIndex(client => client.CPF === CPF)



    if (CPFindex === -1 && calculateYears(dataNascInvert) >= 18 && nome.length > 3){
      const client: ClientAcount = {
        id:clientList.length + 1,
        nome:nome,
        CPF:CPF,
        dataDeNascimento: dataDeNascimento,
        saldo:0,
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
    else if (nome.length <= 3){
      res.statusCode = 422
      throw new Error("'nome' must be longer than 3 characters'.")
    }

    else if (CPFindex !== -1){
      res.statusCode = 422
      throw new Error("'CPF' alredy exist.")
    }

    else if (calculateYears((dataNascInvert)) < 18){
      res.statusCode = 422
      throw new Error("user must be over 18 years old.")
    }

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


  res.status(201).send({
    message: `the client ${clientList[idIndex].nome} have:`,
    saldo: clientList[idIndex].saldo.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })});

} catch (error) {
    res.send({message: error.message})
  }
}) 

app.put("/users/:id", (req:Request, res:Response)=>{
  try {

    const id = Number(req.params.id) ;

    const { credito } = req.body;

    const idIndex = clientList.findIndex(client => client.id === id)

    if (idIndex === -1){
      res.statusCode = 422
      throw new Error("'id' does not exist.")
    }
    
   if(typeof credito !== "number"){
    res.statusCode = 422
    throw new Error("type invalid of 'number'.")
   }

   if (credito < 0){
    res.statusCode = 422
    throw new Error("'credito' need to be more than 0.")
   }
   

    clientList[idIndex].saldo+=credito


    res.status(201).send({
        message: "credit made successfully!",
        valor: credito.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })});

} catch (error) {
    res.send({message: error.message})
  }
}) 

app.put("/users/:id/pay",(req:Request,res:Response)=>{
    try {

  const id = Number(req.params.id)

  const {valor,descricao,data} = req.body  
  
  const idIndex = clientList.findIndex(client => client.id === id)


  const saldo = clientList[idIndex].saldo

    if (idIndex === -1){
      res.statusCode = 422
      throw new Error("'id' does not exist.")
    }
        
    if (!valor ){
      res.statusCode = 422
      throw new Error("'Valor' is required!")
    }
    if (!descricao){
      res.statusCode = 422
      throw new Error("'Descrição' is required!")
    }

    if (typeof valor !== "number"){
      res.statusCode = 422
      throw new Error("type invalid of 'valor'.")
    }
    if (typeof descricao !== "string"){
      res.statusCode = 422
      throw new Error("type invalid of 'descrição'.")
    }

    if (valor <= 0){
      res.statusCode = 422
      throw new Error("'valor' must be greater than 0.")
    }

    if (descricao.length < 6){
      res.statusCode = 422
      throw new Error("'descrição' need more than 6 letter.")
    }

    if (valor > saldo){
      res.statusCode = 422
      throw new Error("'valor' cant be more than 'saldo'.")
    }

    const listaDeContas = clientList[idIndex].listaDeContasPagas

    const conta:PaidAcount = {
        valor:valor,
        descrição:descricao,
        dataDePagamento:data
    }

    listaDeContas.push(conta)

    clientList[idIndex].saldo -= conta.valor

    res.status(201).send({
        message: "conta paga",
        valor: conta,
        saldo:clientList[idIndex].saldo.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        }),
       cliente:clientList[idIndex] });

} catch (error) {
    res.send({message: error.message})
  }
}) 
