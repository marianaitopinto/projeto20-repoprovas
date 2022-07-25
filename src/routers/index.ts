import { Router } from "express";

import authRouter from "./authRouter";
import testRouter from "./testsRouter";

const routers = Router();

routers.use(authRouter);
routers.use(testRouter);

export default routers;