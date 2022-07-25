import prisma from "../config/db";
import { testData } from "../services/testsService";

export async function findTeacherById(teacherDisciplineId: number) {
  return prisma.teacherDiscipline.findFirst({
    where: { id: teacherDisciplineId },
  });
}

export async function findCategoryById(categoryId: number) {
  return prisma.categorie.findFirst({
    where: { id: categoryId },
  });
}

export async function insertTest(test: testData) {
    return prisma.test.create({ data: test })
}