"use strict";
exports.__esModule = true;
exports.newUser = void 0;
var faker_1 = require("@faker-js/faker");
function newUser() {
    var email = faker_1.faker.internet.email();
    var password = faker_1.faker.internet.password(6);
    return {
        email: email,
        password: password,
        confirmPassword: password
    };
}
exports.newUser = newUser;
//# sourceMappingURL=userFactory.js.map