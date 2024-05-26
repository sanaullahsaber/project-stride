import { useLoaderData } from "react-router-dom";

const ProductsDetails = () => {
  const shoe = useLoaderData();
  console.log(shoe);

  const { brand, description, image_url, price, title } = shoe;
  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src={image_url}
            alt={title}
          />
        </div>
        <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">{title}</h1>
          <h2 className="text-3xl text-green-600 font-semibold mb-2">
            ${price}
          </h2>
          <h3 className="text-2xl text-gray-700 font-medium mb-4">{brand}</h3>
          <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500 transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
