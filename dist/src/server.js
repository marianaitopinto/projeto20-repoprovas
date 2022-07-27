"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("dotenv/config");
var app_1 = __importDefault(require("./app"));
var port = process.env.PORT || 5000;
app_1["default"].listen(port, function () {
    console.log("Server up and running on port ".concat(port));
});
//# sourceMappingURL=server.js.map