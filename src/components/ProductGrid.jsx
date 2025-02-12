import React from 'react';
import { Link } from 'react-router-dom';

export const ProductGrid = ({ products, title }) => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-white mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* 🔹 Increased Image Height */}
              <div className="w-full h-80 overflow-hidden bg-gray-800 rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  {product.name}
                </h3>
                <p className="mt-1 text-lg font-serif text-white">${product.price.toLocaleString()}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="mt-2 inline-block w-full text-center border border-white text-white text-sm py-2 px-4 hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
