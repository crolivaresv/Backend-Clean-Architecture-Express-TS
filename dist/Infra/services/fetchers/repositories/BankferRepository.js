"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankferRepository = void 0;
const axios_1 = require("axios");
const baseFetcherRepository_1 = require("./baseFetcherRepository");
class BankferRepository extends baseFetcherRepository_1.baseFetchersRepository {
    constructor() {
        super();
        this.axios = axios_1.default.create({
            baseURL: 'https://jsonplaceholder.typicode.com',
        });
    }
}
exports.BankferRepository = BankferRepository;
//# sourceMappingURL=BankferRepository.js.map