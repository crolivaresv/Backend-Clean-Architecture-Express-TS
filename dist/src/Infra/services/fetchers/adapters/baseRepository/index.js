"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstractBaseRepository_1 = require("../../abstracts/abstractBaseRepository");
class baseFetchersRepository extends abstractBaseRepository_1.abstractBaseRepository {
    async obtener(url) {
        return await this.axios.get(url);
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
exports.default = baseFetchersRepository;
//# sourceMappingURL=index.js.map