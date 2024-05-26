import { useState } from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ shoe }) => {
  // Destructure shoe as an object
  const { id, title, brand, price, description, image_url } = shoe;

  // State to manage description visibility
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  // Function to toggle description
  const handleExpanded = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <div className="max-w-xs w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <figure className="relative w-full h-48">
        <img
          className="w-full h-full object-cover"
          src={image_url}
          alt={title}
        />
      </figure>
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <h3 className="text-lg font-medium text-gray-600 mb-1">{brand}</h3>
        <h3 className="text-lg font-semibold text-green-600 mb-3">${price}</h3>
        <p className="text-gray-700 mb-4">
          {isDescriptionExpanded
            ? description
            : `${description.slice(0, 90)}...`}
          <span
            onClick={handleExpanded}
            className="text-blue-500 cursor-pointer ml-2"
          >
            {isDescriptionExpanded ? "See Less" : "See More"}
          </span>
        </p>
        <div className="text-right">
          <Link
            to={`/products/${id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-500"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
