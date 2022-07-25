import { Test } from "@prisma/client";
import { AppError } from "../errors/appError";
import * as testRepository from "../repositories/testsRepository";

export type testData = Omit<Test, "id">;

export async function addNewTest(test: testData) {
    const teacher = await testRepository.findTeacherById(test.teacherDisciplineId);
    if (!teacher) throw new AppError("Teacher not found!", 404);

    const category = await testRepository.findCategoryById(test.categoryId);
    if (!category) throw new AppError("Category not found!", 404);

    await testRepository.insertTest(test);
}