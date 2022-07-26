import app from "../src/app";
import supertest from "supertest";
import prisma from "../src/config/db";

import { newUser, loginUser } from "./factories/userFactory";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE categories RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE disciplines RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE teachers RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "teachersDisciplines" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "terms" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "tests" RESTART IDENTITY CASCADE`;
});

describe("tests with sign-up", () => {
  it("should return 201 to creaete a new user", async () => {
    const body = await newUser();
    const result = await supertest(app).post("/sign-up").send(body);

    expect(result.status).toEqual(201);
  });

  it("should return 409 using an email alredy registered", async () => {
    const body = await newUser();
    await supertest(app).post("/sign-up").send(body);
    const result = await supertest(app).post("/sign-up").send(body);

    expect(result.status).toEqual(409);
  });

  it("should return 422  for invalid input", async () => {
    const body = await newUser();
    delete body.email;
    const result = await supertest(app).post("/sign-up").send(body);

    expect(result.status).toEqual(422);
  });
});

describe("tests with sign-in", () => {
  it("login, should return status 200", async () => {
    const body = await newUser();
    await supertest(app).post("/sign-up").send(body);
    delete body.confirmPassword;
    const result = await supertest(app).post("/sign-in").send(body);

    expect(result.status).toEqual(200);
  });

  it("login, should return token", async () => {
    const body = await newUser();
    await supertest(app).post("/sign-up").send(body);
    delete body.confirmPassword;
    const result = await supertest(app).post("/sign-in").send(body);
    const token = result.text;
    expect(token).not.toBeNull();
  });

  it("trying to login with email not registered, should return status 401", async () => {
    const body = await newUser();
    delete body.confirmPassword;
    const result = await supertest(app).post("/sign-in").send(body);

    expect(result.status).toEqual(401);
  });
});
