import { Router } from "express";

import { addNewTest, getTestsByDiscipline, getTestsByTeacher } from "../controllers/testsController";
import { validateToken } from "../middlewares/validateToken";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { testSchema } from "../schemas/testsSchema";

const testRouter = Router();

testRouter.post("/", validateToken, validateSchemaMiddleware(testSchema), addNewTest);
testRouter.get("/disciplines", validateToken, getTestsByDiscipline);
testRouter.get("/teachers", validateToken, getTestsByTeacher);

export default testRouter;