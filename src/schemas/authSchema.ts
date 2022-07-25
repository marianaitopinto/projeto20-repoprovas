import joi from "joi";
import { userData } from "../services/authService";

export const signUpSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.valid(joi.ref("password")).required(),
});

export const signInSchema = joi.object<userData>({
  email: joi.string().email().required(),
  password: joi.string().required(),
})