"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ Ordenes }) => (codes) => {
    return {
        todos: async (req, res) => res.status(codes.OK).json(await Ordenes.listarOrden()),
    };
};
//# sourceMappingURL=ordenesHandler.js.map