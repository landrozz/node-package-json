"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.purchases = exports.products = exports.users = void 0;
const types_1 = require("./types");
exports.users = [
    {
        id: "leandrozz",
        email: "leandro@email.com",
        password: "senhaforte123"
    },
    {
        id: "leandro2",
        email: "lzz_sk8@msn.com",
        password: "senha"
    }
];
exports.products = [
    {
        id: "p001",
        name: "Ventilador Mondial",
        price: 89,
        category: types_1.SHOP_CATEGORIES.ELETRODOMESTICO
    },
    {
        id: "p002",
        name: "Playstation 5",
        price: 3500,
        category: types_1.SHOP_CATEGORIES.VIDEOGAMES
    }
];
exports.purchases = [
    {
        userId: "leandrozz",
        productId: "p001",
        quantity: 3,
        totalPrice: 3 * 89
    },
    {
        userId: "leandro2",
        productId: "p002",
        quantity: 2,
        totalPrice: 2 * 3500
    }
];
function createUser(id, email, password) {
    const newUser = {
        id,
        email,
        password
    };
    exports.users.push(newUser);
    console.log("Cadastro realizado com sucesso");
}
exports.createUser = createUser;
function getAllUsers() {
    return console.log(exports.users);
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, category) {
    const newProduct = {
        id,
        name,
        price,
        category
    };
    exports.products.push(newProduct);
    console.log("Produto criado com sucesso");
}
exports.createProduct = createProduct;
function getAllProducts() {
    return console.log(exports.products);
}
exports.getAllProducts = getAllProducts;
function getProductById(idToSearch) {
    const produtoSelecionado = exports.products.find(item => item.id === idToSearch);
    return produtoSelecionado;
}
exports.getProductById = getProductById;
function queryProductsByName(q) {
    return exports.products.filter((item) => item.name.toLowerCase().includes(q.toLowerCase()));
}
exports.queryProductsByName = queryProductsByName;
function createPurchase(userId, productId, quantity, totalPrice) {
    const newPurchase = {
        userId,
        productId,
        quantity,
        totalPrice
    };
    exports.purchases.push(newPurchase);
    console.log("Compra realizada com sucesso");
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(userIdToSearch) {
    return exports.purchases.filter((item) => item.userId.toLowerCase() === userIdToSearch);
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map