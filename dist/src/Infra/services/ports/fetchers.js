"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("../fetchers/adapters");
class fetchers {
    constructor() {
        this.bankfer = new adapters_1.bankferRepository();
        this.ordenes = new adapters_1.ordersRepository();
    }
}
exports.default = fetchers;
//# sourceMappingURL=fetchers.js.map