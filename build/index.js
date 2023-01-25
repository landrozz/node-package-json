"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const types_1 = require("./types");
(0, database_1.createProduct)("p003", "Microfone Blue Yeti", 500, types_1.SHOP_CATEGORIES.PERIFERICOS);
console.log((0, database_1.getProductById)("p003"));
//# sourceMappingURL=index.js.map