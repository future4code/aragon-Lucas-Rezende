import express, { Request, Response } from "express";
import cors from "cors";
import { Product, productList } from "./data";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log("server it work on port 3003");
});

// Exercicio 1

app.get("/test", (req: Request, res: Response) => {
  res.send("API está funcional");
});

// Exercicio 3

app.get("/products", (req: Request, res: Response) => {
  try {
    res.status(200).send({
      message: "ok",
      products: productList,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Exercicio 4

app.post("/products", (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;

    if (typeof name !== "string") {
      res.statusCode = 422;
      throw new Error("error: type invalid of 'name'.");
    }

    if (typeof price !== "number") {
      res.statusCode = 422;
      throw new Error("error: type invalid of 'price'.");
    }

    const product: Product = {
      id: (productList.length + 1).toString(),
      name: name,
      price: price,
    };

    productList.push(product);

    res.status(201).send({
      message: "product added succesfully",
      products: productList,
    });
  } catch (error) {
    res.send({ nessage: error.message });
  }
});

// Exercicio 5

app.put("/products/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const { price } = req.body;

    if (typeof price !== "number") {
      res.statusCode = 422;
      throw new Error("error: type invalid of 'price'.");
    }

    if (price <= 0) {
      res.statusCode = 422;
      throw new Error("error: 'price' is less than 0 or equal.");
    }

    const index = productList.findIndex((product) => {
      return product.id === id;
    });

    if (index === -1) {
      res.statusCode = 422;
      throw new Error("error: 'id' does not exist.");
    }

    const newProduct = productList
      .map((product) => {
        if (product.id === id) {
          product.price = price;
        }

        return product;
      })
      .filter((product) => {
        return product.id === id;
      });

    res.status(201).send({
      message: "price changed succesfully",
      product: newProduct,
    });
  } catch (error) {
    res.send({ nessage: error.message });
  }
});

// Exercicio 6

app.delete("/products/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const index = productList.findIndex((product) => {
      return product.id === id;
    });

    if (index === -1) {
      res.statusCode = 422;
      throw new Error("error: product not found!");
    }

    productList.splice(index, 1);

    res.send({
      mensagem: "product successfully deleted",
      produtos: productList,
    });
  } catch (error) {
    res.send({ nessage: error.message });
  }
});
