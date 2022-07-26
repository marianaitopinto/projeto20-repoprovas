import { faker } from "@faker-js/faker";

export function createTestInfo() {
  return {
    name: faker.name.findName(),
    pdfUrl: faker.internet.url(),
    categoryId: faker.datatype.number({ min: 1, max: 3 }),
    teacherDisciplineId: faker.datatype.number({ min: 1, max: 5 }),
  };
}
