import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProducts = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirm = window.confirm("Are you sure you want to add this product?")

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    if (!confirm) {
      return; // Exit if user cancels confirmation
    }

    const data = { id, title, brand, price, description, image_url };
    console.log(data);

    await fetch("http://localhost:3000/shoes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success("Product added successfully");
      });
  };

  return (
    // ---------------------------------------
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Add Products</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter product title"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="brand" className="text-gray-700 mb-2">
            Brand
          </label>
          <input
            type="text"
            name="brand"
            id="brand"
            placeholder="Enter product brand"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="text-gray-700 mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Enter product price"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows="5"
            placeholder="Enter product description"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="image_url" className="text-gray-700 mb-2">
            Image URL
          </label>
          <input
            type="text"
            name="image_url"
            id="image_url"
            placeholder="Enter product image URL"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="id" className="text-gray-700 mb-2">
            ID
          </label>
          <input
            type="text"
            name="id"
            id="id"
            placeholder="ID"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
// ----------------------------
export default AddProducts;
