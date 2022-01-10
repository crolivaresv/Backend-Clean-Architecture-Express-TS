"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankferRepository = void 0;
const axios_1 = require("axios");
class BankferRepository {
    constructor() {
        this.axios = axios_1.default.create({
            baseURL: 'https://jsonplaceholder.typicode.com',
        });
    }
    async obtener(url) {
        return await this.axios.get(url).then((data) => data);
    }
    enviar(url) {
        return this.axios.post(url);
    }
    actualizar(url) {
        return this.axios.put(url);
    }
    eliminar(url) {
        return this.axios.delete(url);
    }
}
exports.BankferRepository = BankferRepository;
//# sourceMappingURL=BankferRepository.js.map