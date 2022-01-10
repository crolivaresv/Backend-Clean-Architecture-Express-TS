"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRepository = void 0;
const axios_1 = require("axios");
const baseFetcherRepository_1 = require("./baseFetcherRepository");
class OrdersRepository extends baseFetcherRepository_1.baseFetchersRepository {
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
exports.OrdersRepository = OrdersRepository;
//# sourceMappingURL=OrdersRepository.js.map