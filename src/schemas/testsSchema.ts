import joi from "joi";
import { testData } from "../services/testsService";

export const testSchema = joi.object<testData>({
  name: joi.string().required(),
  pdfUrl: joi.string().uri().required(),
  categoryId: joi.number().integer().required(),
  teacherDisciplineId: joi.number().integer().required(),
});
