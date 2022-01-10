"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ordenes_1 = require("../domain/usecases/Ordenes");
class OrdenesService {
    constructor(infra) {
        this.ucOrdenes = new Ordenes_1.UCOrdenes();
        this._infra = infra;
    }
    async editarOrden(orden) {
        try {
            const result = this.ucOrdenes.editarOrden(orden);
            if (typeof result === 'boolean')
                throw new Error('Venia malo');
            return '';
        }
        catch (e) {
            throw new Error('Ta malo!');
        }
    }
    async listarOrden() {
        try {
            const obtenerOrdenes = await this._infra.fetchers.ordenes.todos();
            return this.ucOrdenes.listarOrden(obtenerOrdenes);
        }
        catch (e) {
            throw new Error('Ta malo!');
        }
    }
}
exports.default = OrdenesService;
//# sourceMappingURL=ordenController.js.map