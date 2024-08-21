import { product } from "@prisma/client"
import Link from "next/link"
import PriceTag from "./PriceTag"
import Image from "next/image"

interface ProductCardProps {
    product:product
}

export default function ProductCard ({product}:ProductCardProps){
const isNew = Date.now() - new Date(product.createdAt).getTime() <
1000*60*60*24*7

    return (
        <div className="p-4">
            <Link
                href={"products/"+product.id}
                className="flex flex-col border border-gray-300 rounded-md overflow-hidden mb-4 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
            <Image 
                src={product.imageUrl}
                alt={product.name}
                width={800}
                height={300}
                className="h-48 object-cover"
            />
            <div className="p-4 bg-blue-400 ">
                <h2 className="flex justify-between">{product.name} 
                    {isNew && <div className="text-green-700 font-bold bg-green-200 rounded-md p-1">NEW</div>}</h2>
                <p>{product.description}</p>
                <div className="">
                    <PriceTag className="font-extrabold" price={product.price}/>
                </div>
            </div>
            </Link>
        </div>
    );
}