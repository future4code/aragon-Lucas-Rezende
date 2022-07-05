import express, { Request, Response } from "express";
import cors from "cors";
import { chores, ToDo } from "./Chores";

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3003, () => console.log("the server it work on port 3003;"));

//exercicio 1

app.get("/ping", (req: Request, res: Response) => {
  console.log("pong!");
});

// exercicio 3

app.get("/chores/:userId", (req: Request, res: Response) => {
  const userId = Number(req.params.userId);

  const choresUserId = chores.filter((toDo) => toDo.userId === userId);

  res.status(200).send(choresUserId);
});

// exercicio 4

app.post("/chores", (req: Request, res: Response) => {
  const { userId, title } = req.body;

  const lastToDo = chores[chores.length - 1];

  const newToDo: ToDo = {
    id: lastToDo.id + 1,
    userId: userId,
    title: title,
    completed: false,
  };

  chores.push(newToDo);

  res.send({
    message: "to do  successfully added",
    ToDo: newToDo,
  });
});

//exercicio 5

app.put("/chores/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { completed } = req.body;

  const newIsCompleted = chores.map((toDo) => {
    if (toDo.id === id) {
      toDo.completed = completed;
    }
    return toDo;
  });

  res.send({
    mensagem: "to do status completed successfully changed ",
    produtos: newIsCompleted,
  });
});

// exercicio 6

app.delete("/chores/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const index = chores.findIndex((toDo) => {
    return toDo.id === id;
  });

  if (index === -1) {
    return res.send({
      mensagem: "to do not found!",
      id: id,
    });
  }

  chores.splice(index, 1);

  res.send({
    mensagem: "to do successfully deleted",
    produtos: chores,
  });
});

// Exercicio 7

app.get("/chores", (req: Request, res: Response) => {
  const search = req.query.search;

  if (search !== "true" && search !== "false") {
    return res.send({
      search: search,
      chores: chores,
    });
  }

  if (search === "true") {
    const result = chores.filter((toDo) => {
      return toDo.completed === true;
    });

    return res.send({
      produtos: result,
      busca: search,
    });
  } else {
    const result = chores.filter((toDo) => {
      return toDo.completed === false;
    });

    return res.send({
      produtos: result,
      busca: search,
    });
  }
});
