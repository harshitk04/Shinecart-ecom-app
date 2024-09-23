import { cookies } from "next/headers";
import { prisma } from ".";
import { Cart,Prisma } from "@prisma/client";

export async function getCart(){
    const localCartId = cookies().get("localCartId")?.value;
    const cart = localCartId ? 
    await prisma.cart.findUnique({
        where:{id:localCartId},
        include:{items:{include:{product:true}}}
    }):null;
    if(!cart){
        return null;
    }

    return{
        ...cart,
        size: cart.items.reduce((acc,item)=>acc+item.quantity,0),
        subtotal: cart.items.reduce((acc,item)=>acc + item.quantity*item.product.price,0),
    }
}

export async function createCart(){

}