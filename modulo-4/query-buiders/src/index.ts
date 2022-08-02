import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { postNewPerfume } from "./endpoints/postNewPerfume";
import { getPackedSettings } from "http2";
import { getPerfumes } from "./endpoints/getPerfumes";
import { putNewPrice } from "./endpoints/putNewPrice";
import { deletePerfume } from "./endpoints/deletePerfume";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Implemente seus endpoints abaixo

// Post new perfume

app.post("/perfumes", postNewPerfume)

// Get perfumes

app.get("/perfumes", getPerfumes)

// Put new price

app.put("/perfumes/:perfumeId", putNewPrice) 

// Delete perfume

app.delete("/perfumes/:perfumeId", deletePerfume)