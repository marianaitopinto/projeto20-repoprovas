"use strict";
exports.__esModule = true;
exports.createTestInfo = void 0;
var faker_1 = require("@faker-js/faker");
function createTestInfo() {
    return {
        name: faker_1.faker.name.findName(),
        pdfUrl: faker_1.faker.internet.url(),
        categoryId: faker_1.faker.datatype.number({ min: 1, max: 3 }),
        teacherDisciplineId: faker_1.faker.datatype.number({ min: 1, max: 5 })
    };
}
exports.createTestInfo = createTestInfo;
//# sourceMappingURL=testFactory.js.map