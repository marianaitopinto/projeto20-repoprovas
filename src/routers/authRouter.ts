import { Router } from "express";

import { signUp, signIn } from "../controllers/authController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { signUpSchema } from "../schemas/authSchema";

const authRouter = Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);

export default authRouter;