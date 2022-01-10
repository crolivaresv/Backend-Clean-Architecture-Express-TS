"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ Ordenes }) => (codes) => {
    return {
        index: async (req, res) => res.status(codes.OK).send('Bienvenidos API Max Pro 9.0'),
    };
};
//# sourceMappingURL=rootHandler.js.map