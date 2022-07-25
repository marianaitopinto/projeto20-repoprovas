import prisma from "../config/db";
import { userData } from "../services/authService";

export async function insertUser(user: userData) {
  return prisma.user.create({ data: user });
}

export async function findUserByEmail(email: string) {
  return prisma.user.findFirst({ where: { email } });
}
