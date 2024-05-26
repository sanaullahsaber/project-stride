import { useState } from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to Delete this product?")

    if (!confirm) {
      return
    }

    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(id);
      });
  };

  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

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
          <Link
            to={`/products/${id}`}
            onClick={handleExpanded}
            className="text-blue-500 cursor-pointer ml-2"
          >
            {isDescriptionExpanded ? "See Less" : "See More"}
          </Link>
        </p>
        <div className="flex justify-between mt-4">
          {" "}
          {/* Improved layout with flexbox */}
          <Link
            to={`/products/${id}`}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            See Details
          </Link>
          <Link
            to={`edit/${id}`}
            className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;
