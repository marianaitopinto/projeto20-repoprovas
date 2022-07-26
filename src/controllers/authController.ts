import { Request, Response } from "express";
import { userData } from "../services/authService";

import * as authService from "../services/authService";

export async function signUp(req: Request, res: Response) {
  const { email, password, confirmPassword } = req.body;

  const user: userData = { email, password };

  await authService.createUser(user);

  res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    const { email, password }: userData = req.body;
    const token = await authService.signIn({ email, password });

    res.status(200).send( token );
  }
  