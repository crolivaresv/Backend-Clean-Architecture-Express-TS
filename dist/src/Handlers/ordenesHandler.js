"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ Ordenes }) => (codes) => {
    return {
        get: async (req, res) => {
            return res.status(codes.OK).json(await Ordenes.listarOrden());
        },
    };
};
//# sourceMappingURL=ordenesHandler.js.map