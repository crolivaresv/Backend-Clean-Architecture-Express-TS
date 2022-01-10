"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenesModel = void 0;
class OrdenesModel {
    constructor() {
        this.create = (orden) => orden;
        this.edit = (orden) => (orden.type === 'MKP' ? orden : false);
        this.list = (orden) => orden.filter((el) => el.id === 3 || el.id === 6);
    }
}
exports.OrdenesModel = OrdenesModel;
//# sourceMappingURL=ordenModel.js.map