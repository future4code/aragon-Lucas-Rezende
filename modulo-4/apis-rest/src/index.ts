import express, { Request, Response } from "express";
import cors from "cors";
import { users, USER_ROLE,User } from "./data";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log("server it working on port 3003");
});

// Exercicio 2

app.get("/users", (req: Request, res: Response) => {
  const search = req.query.search;

  try {
    if (search === "") {
      res.send({
        message: "users list",
        users: users,
      });
    } else if (search !== "admin" && search !== "normal") {
      res.statusCode = 422;
      throw new Error("error: 'role' does not exist.");
    }
    
    else if (search === "admin") {
      const newListAdmin = users.filter((user) => {
        return user.role === USER_ROLE.ADMIN;
      });
      res.send({
        message:"users 'admin'",
        list:newListAdmin});
    }
    
    else if (search === "normal") {
      const newListNormal = users.filter((user) => {
        return user.role === USER_ROLE.NORMAL;
      });
      res.send({
        message:"users 'normal'",
        list:newListNormal
      });

        }

  } catch (error) {
    res.send({ error: error.message });
  }
});


// Exercicio 3


app.post("/users", (req: Request, res: Response) => {
  try {
    const {name, email, role, age } = req.body;

    if (typeof name !== "string" || name === "") {
      res.statusCode = 422;
      throw new Error("error: type invalid of 'name'.");
    }

    if (typeof email !== "string" || email === "") {
      res.statusCode = 422;
      throw new Error("error: type invalid of 'email'.");
    }
    
    if (role !== "admin" && role !== "normal" ) {
      res.statusCode = 422;
      throw new Error("error:'role' does not exist.");
    }

    if (typeof age !== "number" || age < 0) {
      res.statusCode = 422;
      throw new Error("error: type invalid of 'age'.");
    }
    const index = users.findIndex((user) => {
      return user.email === email;
    });

    if (index === -1) {
      const user: User = {
        id: users.length + 1,
        name: name,
        email: email,
        role: role,
        age: age,
      };
  
      users.push(user);
  
      res.status(201).send({
        message: "new user added succesfully",
        products: users,
      });
    }

    res.statusCode = 422;
    throw new Error("error: 'email' already exists.")
  } 
  catch (error) {
    res.send({ message:error.message });
  }
});

// Exercício 4

app.put("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id) ;

    const { email } = req.body;

    if (typeof email !== "string") {
      res.statusCode = 422;
      throw new Error("error: type invalid of 'email'.");
    }


    const index = users.findIndex((user) => {
      return user.id === id;
    });

    if (index === -1) {
     res.statusCode = 422;
    throw new Error("error: 'id' does not exist."); 
    }

    const indexEmail = users.findIndex((user) => {
      return user.email === email;
    });
    
    if (indexEmail !== -1) {
      res.statusCode = 422;
     throw new Error("error: 'email' already exist."); 
     }

    const newUserEmail = users.map((user) => {
      if (user.id === id && user.email !== email) {
      user.email=email
      }
      return user
    }).filter(user=>{
      return user.id === id
    })

    res.status(201).send({
      message:"email changed sucesfully",
      user:newUserEmail
    })
  } 
  catch (error) {
    res.send({ message: error.message });
  }
});

// Exercicio 5

app.delete("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (typeof id  !== "number") {
      res.statusCode = 422;
      throw new Error("error: type invalid of 'id'.");
    }

    const index = users.findIndex((user) => {
      return user.id === id;
    });

    if (index === -1) {
      res.statusCode = 422;
      throw new Error("error: user not found!");
    }

    users.splice(index, 1);

    res.send({
      mensagem: "user removed successfully!",
      list: users,
    });
  } catch (error) {
    res.send({ message: error.message });
  }
});



