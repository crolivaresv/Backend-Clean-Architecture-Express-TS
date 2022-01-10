"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const baseRepository_1 = require("../baseRepository");
class bankferRepository extends baseRepository_1.default {
    constructor() {
        super();
        this.axios = axios_1.default.create({
            baseURL: 'https://jsonplaceholder.typicode.com',
        });
    }
}
exports.default = bankferRepository;
//# sourceMappingURL=index.js.map