"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.validateToken = void 0;
var appError_1 = require("../errors/appError");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
function validateToken(req, res, next) {
    var authorization = req.headers.authorization;
    var token = authorization === null || authorization === void 0 ? void 0 : authorization.replace("Bearer ", "").trim();
    if (!token)
        throw new appError_1.AppError("Unauthorized! There is no token.", 401);
    var user = jsonwebtoken_1["default"].verify(token, process.env.JWT_SECRET);
    if (!user)
        throw new appError_1.AppError("User not found.", 401);
    res.locals.user = user;
    next();
}
exports.validateToken = validateToken;
//# sourceMappingURL=validateToken.js.map