import express from "express";
import "express-async-errors";
import cors from "cors";

import routers from "./routers/index";
import handleError from "./middlewares/errorHandlerMiddleware";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routers);
app.use(handleError);

export default app;