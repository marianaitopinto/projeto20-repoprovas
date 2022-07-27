"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var app_1 = __importDefault(require("../src/app"));
var supertest_1 = __importDefault(require("supertest"));
var db_1 = __importDefault(require("../src/config/db"));
var userFactory_1 = require("../src/utils/userFactory");
var testFactory_1 = require("../src/utils/testFactory");
var globalUser = { email: "testando@testando.com", password: "123456" };
afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1["default"].$executeRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["TRUNCATE TABLE users RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE users RESTART IDENTITY CASCADE"])))];
            case 1:
                _a.sent();
                return [4 /*yield*/, db_1["default"].$executeRaw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["TRUNCATE TABLE categories RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE categories RESTART IDENTITY CASCADE"])))];
            case 2:
                _a.sent();
                return [4 /*yield*/, db_1["default"].$executeRaw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["TRUNCATE TABLE disciplines RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE disciplines RESTART IDENTITY CASCADE"])))];
            case 3:
                _a.sent();
                return [4 /*yield*/, db_1["default"].$executeRaw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["TRUNCATE TABLE teachers RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE teachers RESTART IDENTITY CASCADE"])))];
            case 4:
                _a.sent();
                return [4 /*yield*/, db_1["default"].$executeRaw(templateObject_5 || (templateObject_5 = __makeTemplateObject(["TRUNCATE TABLE \"teachersDisciplines\" RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE \"teachersDisciplines\" RESTART IDENTITY CASCADE"])))];
            case 5:
                _a.sent();
                return [4 /*yield*/, db_1["default"].$executeRaw(templateObject_6 || (templateObject_6 = __makeTemplateObject(["TRUNCATE TABLE \"terms\" RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE \"terms\" RESTART IDENTITY CASCADE"])))];
            case 6:
                _a.sent();
                return [4 /*yield*/, db_1["default"].$executeRaw(templateObject_7 || (templateObject_7 = __makeTemplateObject(["TRUNCATE TABLE \"tests\" RESTART IDENTITY CASCADE"], ["TRUNCATE TABLE \"tests\" RESTART IDENTITY CASCADE"])))];
            case 7:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
describe("tests with sign-up", function () {
    it("should return 201 to creaete a new user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var body, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, userFactory_1.newUser)()];
                case 1:
                    body = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/sign-up").send(body)];
                case 2:
                    result = _a.sent();
                    expect(result.status).toEqual(201);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should return 409 using an email alredy registered", function () { return __awaiter(void 0, void 0, void 0, function () {
        var body, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, userFactory_1.newUser)()];
                case 1:
                    body = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/sign-up").send(body)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/sign-up").send(body)];
                case 3:
                    result = _a.sent();
                    expect(result.status).toEqual(409);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should return 422  for invalid input", function () { return __awaiter(void 0, void 0, void 0, function () {
        var body, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, userFactory_1.newUser)()];
                case 1:
                    body = _a.sent();
                    delete body.email;
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/sign-up").send(body)];
                case 2:
                    result = _a.sent();
                    expect(result.status).toEqual(422);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("tests with sign-in", function () {
    it("login, should return status 200", function () { return __awaiter(void 0, void 0, void 0, function () {
        var users, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log({ globalUser: globalUser });
                    return [4 /*yield*/, db_1["default"].users.findMany()];
                case 1:
                    users = _a.sent();
                    console.log(users);
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/sign-in").send(globalUser)];
                case 2:
                    result = _a.sent();
                    expect(result.status).toEqual(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it("login, should return token", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/sign-in").send(globalUser)];
                case 1:
                    result = _a.sent();
                    token = result.text;
                    expect(token).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it("trying to login with email not registered, should return status 401", function () { return __awaiter(void 0, void 0, void 0, function () {
        var body, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, userFactory_1.newUser)()];
                case 1:
                    body = _a.sent();
                    delete body.confirmPassword;
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/sign-in").send(body)];
                case 2:
                    result = _a.sent();
                    expect(result.status).toEqual(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("trying to login with empty lines, should return status 422", function () { return __awaiter(void 0, void 0, void 0, function () {
        var body, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = {
                        email: "",
                        password: ""
                    };
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/sign-in").send(body)];
                case 1:
                    result = _a.sent();
                    expect(result.status).toEqual(422);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("posting tests", function () {
    it("should return 401 tryng to post with no token", function () { return __awaiter(void 0, void 0, void 0, function () {
        var body, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testFactory_1.createTestInfo)()];
                case 1:
                    body = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/tests").send(body)];
                case 2:
                    result = _a.sent();
                    expect(result.status).toEqual(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should return 201 to creaete a new test", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, token, test, testResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/sign-in").send(globalUser)];
                case 1:
                    result = _a.sent();
                    token = result.text;
                    return [4 /*yield*/, (0, testFactory_1.createTestInfo)()];
                case 2:
                    test = _a.sent();
                    console.log(test);
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"])
                            .post("/tests")
                            .set("Authorization", "Bearer ".concat(token))
                            .send(test)];
                case 3:
                    testResult = _a.sent();
                    expect(testResult.status).toEqual(201);
                    return [2 /*return*/];
            }
        });
    }); });
    it("trying to create test missing inputs, should return status 422", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, token, test, testResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/sign-in").send(globalUser)];
                case 1:
                    result = _a.sent();
                    token = result.text;
                    return [4 /*yield*/, (0, testFactory_1.createTestInfo)()];
                case 2:
                    test = _a.sent();
                    delete test.name;
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"])
                            .post("/tests")
                            .set("Authorization", "Bearer ".concat(token))
                            .send(test)];
                case 3:
                    testResult = _a.sent();
                    expect(testResult.status).toEqual(422);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("get tests by disciplines", function () {
    it("should return 401 tryng to get tests with no token", function () { return __awaiter(void 0, void 0, void 0, function () {
        var test, testResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testFactory_1.createTestInfo)()];
                case 1:
                    test = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"])
                            .get("/tests/disciplines")
                            .send(test)];
                case 2:
                    testResult = _a.sent();
                    expect(testResult.status).toEqual(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should return tests with valid inputs", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, token, test, testResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/sign-in").send(globalUser)];
                case 1:
                    result = _a.sent();
                    token = result.text;
                    return [4 /*yield*/, (0, testFactory_1.createTestInfo)()];
                case 2:
                    test = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"])
                            .post("/tests")
                            .set("Authorization", "Bearer ".concat(token))
                            .send(test)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"])
                            .get("/tests/disciplines")
                            .set("Authorization", "Bearer ".concat(token))];
                case 4:
                    testResult = _a.sent();
                    expect(testResult.body).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("get tests by teachers", function () {
    it("should return 401 tryng to get tests with no token", function () { return __awaiter(void 0, void 0, void 0, function () {
        var test, testResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testFactory_1.createTestInfo)()];
                case 1:
                    test = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).get("/tests/teachers").send(test)];
                case 2:
                    testResult = _a.sent();
                    expect(testResult.status).toEqual(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should return tests with valid inputs", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, token, test, testResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/sign-in").send(globalUser)];
                case 1:
                    result = _a.sent();
                    token = result.text;
                    return [4 /*yield*/, (0, testFactory_1.createTestInfo)()];
                case 2:
                    test = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"])
                            .post("/tests")
                            .set("Authorization", "Bearer ".concat(token))
                            .send(test)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"])
                            .get("/tests/teachers")
                            .set("Authorization", "Bearer ".concat(token))];
                case 4:
                    testResult = _a.sent();
                    expect(testResult.body).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=app.test.js.map