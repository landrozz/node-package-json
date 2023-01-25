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

export function createUser(id:string, email:string, password:string){
    const newUser = {
        id,
        email,
        password
    }
    users.push(newUser)
    console.log("Cadastro realizado com sucesso")
} 

export function getAllUsers(){
  return console.log(users)
}

export function createProduct(id:string,name:string,price:number,category:SHOP_CATEGORIES){
    const newProduct = {
        id,
        name,
        price,
        category
    }
    products.push(newProduct)
    console.log("Produto criado com sucesso")

}

export function getAllProducts(){
    return console.log(products)
  }

export function getProductById(idToSearch:string){
    const produtoSelecionado = products.find(item => item.id === idToSearch)
    return produtoSelecionado
}

export function queryProductsByName(q:string){
    return products.filter((item) => 
    item.name.toLowerCase().includes(q.toLowerCase())
    )    
}

export function createPurchase(userId:string, productId:string,quantity:number,totalPrice:number){
    const newPurchase = {
        userId,
        productId,
        quantity,
        totalPrice
    }
    purchases.push(newPurchase)
    console.log("Compra realizada com sucesso")
}

export function getAllPurchasesFromUserId(userIdToSearch:string){
    return purchases.filter((item) => 
    item.userId.toLowerCase() === userIdToSearch
    )
}