export enum SHOP_CATEGORIES {
    VIDEOGAMES = "Video Game",
    ELETRODOMESTICO = "Eletrodomestico",
    PERIFERICOS = "Perifericos"
}

export type TUser = {
    id: string,
    email: string,
    password: string
}

export type TProduct = {
    id: string,
    name: string,
    price: number,
    category: SHOP_CATEGORIES
}

export type TPurchase = {
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
} 
