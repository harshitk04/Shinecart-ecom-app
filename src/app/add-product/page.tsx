import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import FormSubmitButton from "../components/FormSubmitButton";

export const metadata = {
    title: "Add product-SHINECART"
} 

async function addProduct(formData:FormData){
    "use server";
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);

    if(!name || !description || !imageUrl || !price){
        throw new Error ("Missing required fields ");
    }
    await prisma.product.create({
        data : {name,description,imageUrl,price},
    });
    console.log("Reached");
    redirect("/");
}

export default function AddProductPage() {
    return (
        <div>
            <h1 className="mb-3 text-lg font-bold "> Add Product</h1>
            <form action={addProduct}>
                <input 
                    required 
                    name="name"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                    required
                    name="description"
                    placeholder="Description"
                    className="border border-gray-300 rounded-lg px-3 py-1  mt-4 mb-4 w-full "
                />
                <input 
                    required 
                    type="url"      
                    name="imageUrl"
                    placeholder="Image Url"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                    required
                    name="price"
                    placeholder="Price"
                    className="border border-gray-300 rounded-lg px-4 py-1  mt-4 mb-4 w-full"
                />
                <FormSubmitButton className="px-4 py-3 bg-sky-400 hover:bg-sky-700 text-white rounded-2xl  font-bold w-full" type="submit"> Add Product</FormSubmitButton>
            </form>
        </div>
    );
}