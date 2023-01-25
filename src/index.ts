import { createProduct, createUser, getAllProducts, getAllUsers, getProductById, products, purchases, users } from "./database";
import { SHOP_CATEGORIES } from "./types";


createProduct("p003","Microfone Blue Yeti", 500, SHOP_CATEGORIES.PERIFERICOS )
console.log(getProductById("p003"))