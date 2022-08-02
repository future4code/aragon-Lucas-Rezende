import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getUsers } from "./endpoints/getUsers";
import { getProducts } from "./endpoints/getProducts";
import { postNewProduct } from "./endpoints/postNewProduct";
import { deleteProduct } from "./endpoints/deleteProduct";
import { putNewPrice } from "./endpoints/putNewPrice";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Get users
app.get("/users", getUsers)

// Get Products
app.get("/products", getProducts)

// Post New Product
app.post("/products", postNewProduct)

// Delete Product
app.delete("/products/:productId", deleteProduct)

// Put New Price
app.put("/products/:productId", putNewPrice)