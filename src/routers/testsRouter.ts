import { Router } from "express";

import { addNewTest, getTestsByDiscipline } from "../controllers/testsController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { signUpSchema, signInSchema } from "../schemas/authSchema";

const testRouter = Router();

testRouter.post("/tests", addNewTest);
testRouter.get("/tests/disciplines", getTestsByDiscipline);

export default testRouter;