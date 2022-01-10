"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const respuestas_1 = require("./types/respuestas");
const rootHandler_1 = require("./Handlers/rootHandler");
const ordenesHandler_1 = require("./Handlers/ordenesHandler");
const Packages = require("./Package");
const app = express();
app.set('json spaces', 2);
app.get('/', (0, rootHandler_1.default)(Packages)(respuestas_1.codes).index);
app.get('/todos', (0, ordenesHandler_1.default)(Packages)(respuestas_1.codes).todos);
app.listen(3000);
//# sourceMappingURL=server.js.map