"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UCOrdenes = void 0;
const ordenModel_1 = require("../ordenes/ordenModel");
class UCOrdenes {
    constructor() {
        this.editarOrden = (orden) => {
            return this.ordenes.edit(orden);
        };
        this.listarOrden = (ordenes) => {
            const filtrar_completed = ordenes.data
                .filter((e) => e.completed === false)
                .map((el) => {
                return {
                    id: el.id,
                    description: el.title,
                    price: 1,
                    date: new Date(),
                    type: 'MKP',
                };
            });
            return this.ordenes.list(filtrar_completed);
        };
        this.ordenes = new ordenModel_1.OrdenesModel();
    }
}
exports.UCOrdenes = UCOrdenes;
//# sourceMappingURL=Ordenes.js.map