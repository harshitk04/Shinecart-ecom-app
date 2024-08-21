"use server";

import { cookies } from "next/headers";
import { prisma } from ".";
import { Cart, Prisma } from "@prisma/client";

export type CartwithProducts = Prisma.CartGetPayload<{
    include: { items: { include: { product: true } } },
}>;

export type ShoppingCart = CartwithProducts & {
    size: number;
    subtotal: number;
};

export async function getCart(): Promise<ShoppingCart | null> {
    const localCartId = cookies().get("localCartId")?.value;

    if (!localCartId) {
        return null;
    }

    const cart = await prisma.cart.findUnique({
        where: { id: localCartId },
        include: { items: { include: { product: true } } },
    });

    if (!cart || !cart.items) {
        return null;
    }

    const size = cart.items.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.items.reduce(
        (acc, item) => acc + item.quantity * item.product.price,
        0
    );

    return {
        ...cart,
        size,
        subtotal,
    };
}

export async function createCart(): Promise<ShoppingCart> {
    const newCart = await prisma.cart.create({
        data: {},
    });

    cookies().set("localCartId", newCart.id);

    return {
        ...newCart,
        items: [],
        size: 0,
        subtotal: 0,
    };
}
