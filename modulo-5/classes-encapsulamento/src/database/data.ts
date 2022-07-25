import { TProduct } from "../models/Product";
import { TPurchase } from "../models/Purchase";
import { TUser } from "../models/User";

export const users: TUser[] = [
    {
        id: "101",
        email: "astrodev@gmail.com",
        password: "bananinha"
    },
    {
        id: "102",
        email: "fulano@gmail.com",
        password: "qwerty00"
    },
    {
        id: "103",
        email: "ciclana@gmail.com",
        password: "asdfg123"
    }
]

export const products: TProduct[] = [
    {
        id: "201",
        name: "Webcam",
        price: 99.00
    },
    {
        id: "202",
        name: "Teclado Gamer",
        price: 250.00
    },
    {
        id: "203",
        name: "Monitor",
        price: 459.99
    },
    {
        id: "204",
        name: "Impressora",
        price: 275.25
    },
    {
        id: "205",
        name: "Mouse Gamer",
        price: 399.99
    }
]

export const purchases: TPurchase[] = [
    {
        id: "301",
        userId: "101",
        productId: "201",
        quantity: 1,
        totalPrice: 99.00
    },
    {
        id: "302",
        userId: "101",
        productId: "203",
        quantity: 1,
        totalPrice: 459.99
    },
    {
        id: "303",
        userId: "101",
        productId: "202",
        quantity: 2,
        totalPrice: 500.00
    }
]