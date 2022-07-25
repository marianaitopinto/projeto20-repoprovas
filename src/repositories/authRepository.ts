import prisma from "../config/db";
import { userData } from "../services/authService";

export async function insertUser(user: userData) {
  return prisma.users.create({ data: user });
}

export async function findUserByEmail(email: string) {
  return prisma.users.findFirst({ where: { email } });
}
