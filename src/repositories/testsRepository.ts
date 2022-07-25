import prisma from "../config/db";
import { testData } from "../services/testsService";

export async function findTeacherById(teacherDisciplineId: number) {
  return prisma.teachersDisciplines.findFirst({
    where: { id: teacherDisciplineId },
  });
}

export async function findCategoryById(categoryId: number) {
  return prisma.categories.findFirst({
    where: { id: categoryId },
  });
}

export async function insertTest(test: testData) {
  return prisma.tests.create({ data: test });
}

export async function findTestByDiscipline() {
  return prisma.terms.findMany({
    select: {
      id: true,
      number: true,
      disciplines: {
        select: {
          id: true,
          name: true,
          teacherDisciplines: {
            select: {
              id: true,
              discipline: true,
              teacher: true,
              tests: {
                select: {
                  id: true,
                  name: true,
                  pdfUrl: true,
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  });
}

export async function getTestsByTeacher() {
  return prisma.teachersDisciplines.findMany({
    select: {
      id: true,
      teacher: true,
      discipline: true,
      tests: {
        select: {
          id: true,
          name: true,
          pdfUrl: true,
          category: true,
        },
      },
    },
  });
}
