import { Request, Response } from "express";
import { testData } from "../services/testsService";

import * as testService from "../services/testsService";

export async function addNewTest(req: Request, res: Response) {
    const test: testData = req.body;

    await testService.addNewTest(test);

    res.sendStatus(201);
}