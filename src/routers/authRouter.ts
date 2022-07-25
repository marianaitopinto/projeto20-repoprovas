import { Router } from "express";

import { signUp, signIn } from "../controllers/authController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { signUpSchema, signInSchema } from "../schemas/authSchema";

const authRouter = Router();

authRouter.post("/sign-up",  signUp); //FIX ME VER ERRO SCHEMA
authRouter.post("/sign-in", validateSchemaMiddleware(signInSchema), signIn); //FIX ME VER ERRO SCHEMA

export default authRouter;