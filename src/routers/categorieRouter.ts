import { Router } from "express";
import prisma from "../config/db";

const categorieRouter = Router();

categorieRouter.get("/categories", async (req, res ) => {
    const categories = await prisma.categories.findMany()

    return res.json({categories})
})

export default categorieRouter;