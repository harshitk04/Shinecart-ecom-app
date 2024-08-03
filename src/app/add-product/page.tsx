export default function AddProductPage() {
    return (
        <div>
            <h1 className="mb-3 text-lg font-bold "> Add Product</h1>
            <form>
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
                    className="textarea-bordered textarea px-3 py-6  mt-5 mb-5 w-full "
                />
                <input 
                    required 
                    type="url"
                    name="name"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                    required
                    name="price"
                    placeholder="Price"
                    className="textarea-bordered textarea px-4 py-2  mt-4 mb-5 w-full "
                />
                <button className="px-4 py-3 bg-sky-400 hover:bg-sky-700 text-white rounded-2xl  font-bold w-full">Add Product</button>
            </form>
        </div>
    )
}