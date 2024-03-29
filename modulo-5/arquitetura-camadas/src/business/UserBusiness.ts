import { UserDatabase } from "../database/UserDatabase"
import { User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
  public signup = async (input: any) => {
    const name = input.name
    const email = input.email
    const password = input.password

    if (!name || !email || !password) {
        throw new Error("Parâmetros faltando")
    }

    if (typeof name !== "string") {
        throw new Error("Parâmetro 'nickname' deve ser uma string")
    }

    if (typeof email !== "string") {
        throw new Error("Parâmetro 'email' deve ser uma string")
    }

    if (typeof password !== "string") {
        throw new Error("Parâmetro 'password' deve ser uma string")
    }

    if (name.length < 3) {
        throw new Error("O parâmetro 'nickname' deve possuir ao menos 3 caracteres")
    }

    if (password.length < 6) {
        throw new Error("O parâmetro 'password' deve possuir ao menos 6 caracteres")
    }

    if (!email.includes("@") || !email.includes(".com")) {
        throw new Error("O parâmetro 'password' deve possuir ao menos 6 caracteres")
    }

    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()

    const hashManager = new HashManager()
    const hashPassword = await hashManager.hash(password)

    const user = new User(
        id,
        name,
        email,
        hashPassword,
        USER_ROLES.NORMAL
    )

    const userDatabase = new UserDatabase()
    await userDatabase.createUser(user)

    const payload: ITokenPayload = {
        id: user.getId(),
        role: user.getRole()
    }

    const authenticator = new Authenticator()
    const token = authenticator.generateToken(payload)

    const response = {
        message: "Cadastro realizado com sucesso",
        token
    }

    return response
}

public login = async (input: any) => {
  const email = input.email
  const password = input.password

  if (!email || !password) {
      throw new Error("Email ou senha faltando")
  }

  if (typeof email !== "string") {
      throw new Error("Parâmetro 'email' deve ser uma string")
  }

  if (typeof password !== "string") {
      throw new Error("Parâmetro 'password' deve ser uma string")
  }

  if (password.length < 6) {
      throw new Error("O parâmetro 'password' deve possuir ao menos 6 caracteres")
  }

  if (!email.includes("@") || !email.includes(".com")) {
      throw new Error("O parâmetro 'password' deve possuir ao menos 6 caracteres")
  }

  const userDatabase = new UserDatabase()
  const userDB = await userDatabase.findByEmail(email)

  if (!userDB) {
      throw new Error("Email não cadastrado")
  }

  const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role
  )

  const hashManager = new HashManager()
  const isPasswordCorrect = await hashManager.compare(
      password,
      user.getPassword()
  )

  if (!isPasswordCorrect) {
      throw new Error("Senha inválida")
  }

  const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole()
  }

  const authenticator = new Authenticator()
  const token = authenticator.generateToken(payload)

  const response = {
      message: "Login realizado com sucesso",
      token
  }

  return response
}

public getAllUsers = async (input:any) => {

  const token = input.token
  const search = input.search || ""

  const authenticator = new Authenticator()
  const payload = authenticator.getTokenPayload(token)


  if (!payload) {
      throw new Error("Token faltando ou inválido")
  }

  if (typeof search !== "string") {
      throw new Error("Parâmetro 'search' deve ser uma string")
  }

  const userDatabase = new UserDatabase()
  const isUserExists = await userDatabase.findById(payload.id)

  if (!isUserExists) {
      throw new Error("Token inválido")
  }

  const usersDB = await userDatabase.getAllUsers(search)

  const users = usersDB.map((userDB) => {
      return new User(
          userDB.id,
          userDB.name,
          userDB.email,
          userDB.password,
          userDB.role
      )
  })

  const response = users.map((user) => {
      return {
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          role: user.getRole()
      }
  })

  return response
}

public deleteUsers = async (input:any) => {
  
  const token = input.token
  const id = input.id

  const authenticator = new Authenticator()
  const payload = authenticator.getTokenPayload(token)

  if (!payload) {
      throw new Error("Token faltando ou inválido")
  }

  if (payload.role !== "ADMIN") {
    throw new Error("usuário não tem autorização para deletar")
}

  const userDatabase = new UserDatabase()
  const isUserExists = await userDatabase.findById(payload.id)

  if (!isUserExists) {
      throw new Error("usuário inexistente")
  }

  if (id === payload.id) {
      throw new Error("Não é possível deletar a própria conta")
  }

   await userDatabase.deleteUser(id)
  
   const response = {
    message: "Usuário deletado com sucesso"
}

  return response

}
}