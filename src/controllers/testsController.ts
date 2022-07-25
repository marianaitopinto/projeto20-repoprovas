import { Request, Response } from "express";
import { testData } from "../services/testsService";

import * as testService from "../services/testsService";

export async function addNewTest(req: Request, res: Response) {
    const test: testData = req.body;

    await testService.addNewTest(test);

    res.sendStatus(201);
}

export async function getTestsByDiscipline(req: Request, res: Response) {
    const tests = await testService.getTestsByDiscipline();
    res.send(tests);
}

export async function getTestsByTeacher(req: Request, res: Response) {
    const tests = await testService.getTestsByTeacher();
    res.send(tests);
}