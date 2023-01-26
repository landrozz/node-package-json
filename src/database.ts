import { TProduct, TPurchase, TUser, SHOP_CATEGORIES} from "./types";

export const users:TUser[] = [
    {
        id:"leandrozz",
        email:"leandro@email.com",
        password:"senhaforte123"
    },
    {
        id:"leandro2",
        email:"lzz_sk8@msn.com",
        password:"senha"
    }
]

export const products:TProduct[] = [
    {
        id:"p001",
        name:"Ventilador Mondial",
        price:89,
        category: SHOP_CATEGORIES.ELETRODOMESTICO
    },
    {
        id:"p002",
        name:"Playstation 5",
        price:3500,
        category: SHOP_CATEGORIES.VIDEOGAMES
    }
]

export const purchases:TPurchase[] = [
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
]

export function getProductById(idToSearch:string){
    const produtoSelecionado = products.find(item => item.id === idToSearch)
    return produtoSelecionado
}



export function getAllPurchasesFromUserId(userIdToSearch:string){
    return purchases.filter((item) => 
    item.userId.toLowerCase() === userIdToSearch
    )
}