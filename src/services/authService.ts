import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";

import { users } from "@prisma/client";
import { AppError } from "../errors/appError";
import * as authRepository from "../repositories/authRepository";

export type userData = Omit<users, "id">;

const SALT_ROUNDS = 10;

export async function createUser({ email, password }: userData) {
  const checkEmail = await authRepository.findUserByEmail(email);
  if (checkEmail) throw new AppError("E-mail is already registered", 409);

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
  await authRepository.insertUser({ email, password: passwordHash });
}

export async function signIn({ email, password }: userData) {
    const user = await authRepository.findUserByEmail(email);
  
    if (!user || !(await bcrypt.compare(password, user.password)))
      throw new AppError("E-mail or password is incorrect", 401);
  
    const token = await generateToken(user);
  
    return token;
  }
  
  async function generateToken(user: users) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string);
    return token;
  }