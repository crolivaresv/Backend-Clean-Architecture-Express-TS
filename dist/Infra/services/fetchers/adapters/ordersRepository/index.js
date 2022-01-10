"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const baseRepository_1 = require("../baseRepository");
class ordersRepository extends baseRepository_1.default {
    constructor() {
        super();
        this.todos = async () => {
            return await this.obtener('/todos');
        };
        this.numero1 = async () => {
            return await this.obtener('/todos/1');
        };
        this.axios = axios_1.default.create({
            baseURL: 'https://jsonplaceholder.typicode.com',
        });
    }
}
exports.default = ordersRepository;
//# sourceMappingURL=index.js.map