"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var authRouter_1 = __importDefault(require("./authRouter"));
var testsRouter_1 = __importDefault(require("./testsRouter"));
var categorieRouter_1 = __importDefault(require("./categorieRouter"));
var routers = (0, express_1.Router)();
routers.use(authRouter_1["default"]);
routers.use("/tests", testsRouter_1["default"]);
routers.use(categorieRouter_1["default"]);
exports["default"] = routers;
//# sourceMappingURL=index.js.map