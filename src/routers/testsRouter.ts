import { Router } from "express";

import { addNewTest, getTestsByDiscipline, getTestsByTeacher } from "../controllers/testsController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { signUpSchema, signInSchema } from "../schemas/authSchema";

const testRouter = Router();

testRouter.post("/", addNewTest);
testRouter.get("/disciplines", getTestsByDiscipline);
testRouter.get("/teachers", getTestsByTeacher);

export default testRouter;