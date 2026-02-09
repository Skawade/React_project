import React from "react";
import useFetch from "../Hooks/useFetch";

const Products = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Photos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.slice(0, 12).map((item) => (
          <div
            key={item.id}
            className="border border-gray-600 p-4 hover:border-white transition"
          >
            <div className="w-full aspect-square overflow-hidden mb-3">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-gray-300 line-clamp-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
