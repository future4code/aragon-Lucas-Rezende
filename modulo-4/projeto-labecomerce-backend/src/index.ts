import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ping } from './endpoints/ping'
import { postNewUser } from './endpoints/postNewUser'
import { getUsers } from './endpoints/getUsers'
import { postNewProduct } from './endpoints/postNewProduct'
import { getProducts } from './endpoints/getProducts'
import { postPurchase } from './endpoints/postPurchase'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.get("/ping", ping)

app.post("/users", postNewUser)

app.get("/users", getUsers)

app.post("/products", postNewProduct)

app.get("/products", getProducts)

app.post("/purchases", postPurchase)