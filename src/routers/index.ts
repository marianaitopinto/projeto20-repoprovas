import { Router } from "express";

import authRouter from "./authRouter";
import testRouter from "./testsRouter";
import categorieRouter from "./categorieRouter";

const routers = Router();

routers.use(authRouter);
routers.use("/tests", testRouter);
routers.use(categorieRouter);

export default routers;