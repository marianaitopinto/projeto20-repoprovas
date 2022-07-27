"use strict";
exports.__esModule = true;
var express_1 = require("express");
var authController_1 = require("../controllers/authController");
var validateSchema_1 = require("../middlewares/validateSchema");
var authSchema_1 = require("../schemas/authSchema");
var authRouter = (0, express_1.Router)();
authRouter.post("/sign-up", (0, validateSchema_1.validateSchemaMiddleware)(authSchema_1.signUpSchema), authController_1.signUp);
authRouter.post("/sign-in", (0, validateSchema_1.validateSchemaMiddleware)(authSchema_1.signInSchema), authController_1.signIn);
exports["default"] = authRouter;
//# sourceMappingURL=authRouter.js.map