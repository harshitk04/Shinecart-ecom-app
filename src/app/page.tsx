import { prisma } from "@/lib/db"
import ProductCard from "./components/ProductCard";
import Image from "next/image";
import Link from "next/link";

export default async function Home (){
  const products = await prisma.product.findMany({
    orderBy: {id:"desc"}
  })
  return (
    <div>
      <div className="">
        <div className="p-4 shadow-lg bg-sky-300 rounded-lg border-gray-400 flex flex-col lg:flex-row">
          <Image
            src={products[0].imageUrl}
            alt={products[0].name}
            width={400}
            height={800}
            className="w-full max-w-sm rounded-lg shadow-2xl"
            priority
          />
          <div className="flex p-4 flex-col ">
            <h1 className="text-5xl flex justify-start p-2 font-bold">{products[0].name}</h1>
            <p className="lg:py-10 py-2 ">{products[0].description}</p>
            <div className="lg:my-12 my-2">
            <Link
                href={"/products/"+products[0].id}
                className="bg-blue-400 p-3 rounded-lg hover:bg-blue-500 "
                >
                  Check it out
              </Link>
          </div>
          </div>
          
        </div>
      
        <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.slice(1).map((product)=>(
            <ProductCard product={product} key={product.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}