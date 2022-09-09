import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";
import { IGetathletestInputDTO, ILoginInputDTO, ISignupInputDTO } from "../models/User";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response) => {
    try {
      const input: ISignupInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const response = await this.userBusiness.signup(input);
      res.status(201).send(response);
    } catch (error: unknown) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }

      res
        .status(500)
        .send({ message: "unexpected error when registering user" });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const input: ILoginInputDTO = {
        email: req.body.email,
        password: req.body.password,
      };

      const response = await this.userBusiness.login(input);
      res.status(201).send(response);
    } catch (error: unknown) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado ao logar usuário" });
    }
  };

  public getAthletes = async (req: Request, res: Response) => {
    try {

      const response = await this.userBusiness.getAthletes();
      res.status(200).send(response);
    } catch (error: unknown) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
console.log(error)
      res.status(500).send({ message: "unexpected error searching results" });
    }
  };
}
