"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchersRepository = void 0;
const Abstract_IFetcher_1 = require("../interfaces/Abstract-IFetcher");
class FetchersRepository extends Abstract_IFetcher_1.ICFetcher {
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
exports.FetchersRepository = FetchersRepository;
//# sourceMappingURL=FetchersRepository.js.map