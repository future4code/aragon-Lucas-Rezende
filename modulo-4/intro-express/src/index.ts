import express, { Request, Response } from "express";
import cors from "cors";

//exercicio 2

type User = {
  id: number;
  name: string;
  phone: number | string;
  email: string;
};

let users: User[] = [
  {
    id: 1,
    name: "lucas",
    phone: "9999-9999",
    email: "lucas@email.com",
  },
  {
    id: 2,
    name: "carol",
    phone: "9999-9998",
    email: "carol@email.com",
  },
  {
    id: 3,
    name: "miguel",
    phone: "9999-9997",
    email: "miguel@email.com",
  },
  {
    id: 4,
    name: "davi",
    phone: "9999-9996",
    email: "davi@email.com",
  },
];

const app = express();

app.use(cors());
app.use(express.json());

//exercicio 1
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Servidor funcionando");
});

//exercicio 3

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users);
});

//exercicio 4

app.get("/users/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = users.filter((user) => user.id === id);
  res.status(200).send(user);
});

//exercicio 5

app.put("/users/:id", (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const phone: number = req.body.phone;

  const newPhone = users.map((user) => {
    if (user.id === id) {
      return { ...user, phone: phone };
    } else return user;
  });
  users = newPhone;

  const updateUsers = users.filter((user) => {
    user.id === id;
  });
  res
    .status(201)
    .send({ mensagem: "telefone alterado com sucesso!", user: updateUsers[0] });
});

// exercicio 6

app.delete("/users/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = users.findIndex((user) => user.id === id);
  users.splice(index, 1);
  res.status(200).send(users);
});

app.listen(3003, () => console.log("the server it work on port 3003."));
