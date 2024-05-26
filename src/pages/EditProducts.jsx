import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProducts = () => {
  const shoe = useLoaderData();

  const [id, setId] = useState(shoe.id);
  const [title, setTitle] = useState(shoe.title);
  const [brand, setBrand] = useState(shoe.brand);
  const [price, setPrice] = useState(shoe.price);
  const [description, setDescription] = useState(shoe.description);
  const [image_url, setImageURL] = useState(shoe.image_url);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const confirm = window.confirm(
      "Are you sure you want to edit this product?"
    );

    if (!confirm) {
      return;
    }

    const data = { id, title, brand, price, description, image_url };

    await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Product edited successfully");
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Edit Product</h1>
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
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
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image_url" className="text-gray-700 mb-2">
            Image URL
          </label>
          <textarea
            name="image_url"
            id="image_url"
            rows="5"
            placeholder="Enter product Image URL"
            value={image_url}
            onChange={(e) => setImageURL(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="id" className="text-gray-700 mb-2">
            ID
          </label>
          <textarea
            name="id"
            id="id"
            rows="5"
            placeholder="Enter product ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <input
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
// -----------------------
export default EditProducts;
