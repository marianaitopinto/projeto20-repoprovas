"use strict";
exports.__esModule = true;
exports.validateSchemaMiddleware = void 0;
var appError_1 = require("../errors/appError");
function validateSchemaMiddleware(schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.body);
        if (validation.error)
            throw new appError_1.AppError("Invalid schema", 422);
        next();
    };
}
exports.validateSchemaMiddleware = validateSchemaMiddleware;
//# sourceMappingURL=validateSchema.js.map