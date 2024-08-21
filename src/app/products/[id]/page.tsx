import PriceTag from "@/app/components/PriceTag"
import { prisma } from "@/lib/db"
import Image from "next/image"
import { notFound } from "next/navigation"
import { cache } from "react"
import { Metadata } from "next"
import { title } from "process"
import AddToCartButton from "./AddToCartButton"

interface ProductPageProps {
    params:{id:string,}
}

const getProduct = cache(async (id:string)=>{
    const product = await prisma.product.findUnique({where:{id}})
    if(!product) notFound();
    return product;
})

export async function generateMetadata(
    {params:{id}}:ProductPageProps
){
    const product = await getProduct(id);
    return{
        title:product.name + "-SHINECART",
        description: product.description,
        openGraph:{
            images:[{url: product.imageUrl}],
        },
    };
}

export default async function ProductPage(
    {params:{id}}:ProductPageProps
){
    const product = await getProduct(id);
    return (
        <div className="flex bg-sky-200 flex-col p-5 lg:h-[720px] lg:flex-row gap-4 lg:items-center ">
            <Image
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-lg shadow-2xl gap-4 border-gray-900"
                priority
            />
            <div className="flex flex-col">
                <h1 className="text-5xl font-bold">{product.name}</h1>
                <div className="my-3 px-2">
                    <PriceTag price={product.price} className=" p-1 border rounded-lg bg-green-400"></PriceTag>    
                </div>
                <p className="m-3 mt-8">{product.description}</p>
                <AddToCartButton productId={product.id}></AddToCartButton>
            </div>
        </div>
    )
}
