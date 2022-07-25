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
  return prisma.test.create({ data: test });
}

export async function findTestByDiscipline() {
  return prisma.term.findMany({
    select: {
      number: true,
      Discipline: {
        select: {
          id: true,
          name: true,
          TeacherDiscipline: {
            select: {
              teachers: { select: { name: true } },
              Test: {
                select: {
                  name: true,
                  pdfUrl: true,
                  categories: { select: { name: true } },
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
  return prisma.teacher.findMany({
    select: {
      id: true,
      name: true,
      TeacherDiscipline: {
        select: {
          disciplines: {
            select: {
              name: true,
              terms: { select: { number: true } },
            },
          },
          Test: {
            select: {
              name: true,
              pdfUrl: true,
              categories: { select: { name: true } },
            },
          },
        },
      },
    },
  });
}
