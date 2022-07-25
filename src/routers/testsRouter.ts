import { Router } from "express";

import { addNewTest } from "../controllers/testsController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { signUpSchema, signInSchema } from "../schemas/authSchema";

const testRouter = Router();

testRouter.post("/tests", addNewTest);

export default testRouter;