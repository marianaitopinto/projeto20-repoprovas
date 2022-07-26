import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

import prisma from "../../src/config/db";

interface Login {
  email: string;
  password: string;
}

export function newUser(email = "testando@testando.com") {
  const password = faker.internet.password(6);
  return {
    email,
    password: password,
    confirmPassword: password,
  };
}

export async function loginUser(login: Login) {
  const user = await prisma.users.create({
    data: {
      email: login.email,
      password: bcrypt.hashSync(login.password, 6),
    },
  });

  return { ...user, plainPassword: login.password };
}
