"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchers_1 = require("./ports/fetchers");
class infra {
    constructor() {
        this.fetchers = new fetchers_1.default();
    }
}
exports.default = infra;
//# sourceMappingURL=index.js.map