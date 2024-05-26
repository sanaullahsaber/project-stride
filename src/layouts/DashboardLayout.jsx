import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar for larger screens and hamburger menu for small screens */}
      <div className="md:hidden bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Dashboard</h1>
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`w-full md:w-1/4 lg:w-1/5 bg-gray-800 text-white p-6 ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="home"
                className="block p-4 rounded hover:bg-gray-700 transition-colors"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="all-products"
                className="block p-4 rounded hover:bg-gray-700 transition-colors"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                to="add-products"
                className="block p-4 rounded hover:bg-gray-700 transition-colors"
              >
                Add Product
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block p-4 rounded hover:bg-gray-700 transition-colors"
              >
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <main className="flex-1 p-6 md:p-10 lg:p-12 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
