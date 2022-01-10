"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankferRepository = void 0;
const axios_1 = require("axios");
const baseFetcherRepository_1 = require("./baseFetcherRepository");
class bankferRepository extends baseFetcherRepository_1.baseFetchersRepository {
    constructor() {
        super();
        this.axios = axios_1.default.create({
            baseURL: 'https://jsonplaceholder.typicode.com',
        });
    }
}
exports.bankferRepository = bankferRepository;
//# sourceMappingURL=bankferRepository.js.map