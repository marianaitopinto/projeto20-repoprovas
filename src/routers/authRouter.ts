import { Router } from "express";

import { signUp, signIn } from "../controllers/authController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { signUpSchema, signInSchema } from "../schemas/authSchema";

const authRouter = Router();

authRouter.post("/sign-up", validateSchemaMiddleware(signUpSchema), signUp); 
authRouter.post("/sign-in", validateSchemaMiddleware(signInSchema), signIn); 

export default authRouter;