"use strict";
exports.__esModule = true;
var express_1 = require("express");
var testsController_1 = require("../controllers/testsController");
var validateToken_1 = require("../middlewares/validateToken");
var validateSchema_1 = require("../middlewares/validateSchema");
var testsSchema_1 = require("../schemas/testsSchema");
var testRouter = (0, express_1.Router)();
testRouter.post("/", validateToken_1.validateToken, (0, validateSchema_1.validateSchemaMiddleware)(testsSchema_1.testSchema), testsController_1.addNewTest);
testRouter.get("/disciplines", validateToken_1.validateToken, testsController_1.getTestsByDiscipline);
testRouter.get("/teachers", validateToken_1.validateToken, testsController_1.getTestsByTeacher);
exports["default"] = testRouter;
//# sourceMappingURL=testsRouter.js.map