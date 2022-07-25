import { tests } from "@prisma/client";
import { AppError } from "../errors/appError";
import * as testRepository from "../repositories/testsRepository";

export type testData = Omit<tests, "id">;

export async function addNewTest(test: testData) {
    const teacher = await testRepository.findTeacherById(test.teacherDisciplineId);
    if (!teacher) throw new AppError("Teacher not found!", 404);

    const category = await testRepository.findCategoryById(test.categoryId);
    if (!category) throw new AppError("Category not found!", 404);

    await testRepository.insertTest(test);
}

export async function getTestsByDiscipline() {
    const tests = await testRepository.findTestByDiscipline();
    return tests;
}

export async function getTestsByTeacher() {
    const tests = await testRepository.getTestsByTeacher();
    return tests;
}