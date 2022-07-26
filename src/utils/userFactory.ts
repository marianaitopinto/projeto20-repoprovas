import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

import prisma from "../config/db";

interface Login {
  email: string;
  password: string;
}

export function newUser() {
  const email = faker.internet.email();
  const password = faker.internet.password(6);
  return {
    email,
    password: password,
    confirmPassword: password,
  };
}
