import prisma from "../src/config/db";

async function main() {
  const teachers = [{ name: "Diego Pinho" }, { name: "Bruna Harmoni" }];

  const terms = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
  ];

  const disciplines = [
    {
      name: "HTML e CSS",
      termId: 1,
    },
    {
      name: "JavaScript",
      termId: 2,
    },
    {
      name: "React",
      termId: 3,
    },
    {
      name: "Humildade",
      termId: 1,
    },
    {
      name: "Planejamento",
      termId: 2,
    },
  ];

  const categories = [
    { name: "Projeto" },
    { name: "Prática" },
    { name: "Recuperação" },
  ];

  const teachersDisciplines = [
    { teacherId: 1, disciplineId: 1 },
    { teacherId: 1, disciplineId: 2 },
    { teacherId: 1, disciplineId: 3 },
    { teacherId: 2, disciplineId: 4 },
    { teacherId: 2, disciplineId: 5 },
    { teacherId: 2, disciplineId: 6 },
  ];

  await prisma.teachers.createMany({ data: teachers });
  await prisma.terms.createMany({ data: terms });
  await prisma.disciplines.createMany({ data: disciplines });
  await prisma.categories.createMany({ data: categories });
  await prisma.teachersDisciplines.createMany({ data: teachersDisciplines });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
