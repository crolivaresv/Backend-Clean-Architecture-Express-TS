"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ordenes = void 0;
const ordenController_1 = require("./ordenes/controller/ordenController");
const services_1 = require("../Infra/services");
const Ordenes = new ordenController_1.default(new services_1.default());
exports.Ordenes = Ordenes;
//# sourceMappingURL=index.js.map