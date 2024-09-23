"use server"

import { prisma } from "@/lib/db";
import { createCart, getCart } from "@/lib/db/cart"

export async function incrementProductQuantity(productId:string){
    const cart = await getCart() ?? await createCart();
    const articleIncCart = cart.items.find(item=>item.productId===productId);
}