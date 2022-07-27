"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var cors_1 = __importDefault(require("cors"));
var index_1 = __importDefault(require("./routers/index"));
var errorHandlerMiddleware_1 = __importDefault(require("./middlewares/errorHandlerMiddleware"));
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
app.use(index_1["default"]);
app.use(errorHandlerMiddleware_1["default"]);
exports["default"] = app;
//# sourceMappingURL=app.js.map