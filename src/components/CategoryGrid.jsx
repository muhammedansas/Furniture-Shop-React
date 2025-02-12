import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

export const CategoryGrid = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-white mb-8 text-center">Browse Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              to={`/category/${category.id}`}
              key={category.id}
              className="relative group overflow-hidden h-[280px] bg-gray-900"
            >
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                <div className="border-l-2 border-white pl-4">
                  <h3 className="text-2xl font-serif text-white mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};