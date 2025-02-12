import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Ruler, Package } from 'lucide-react';
import { products } from '../data/products';

export const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-300">Product not found</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-white hover:text-gray-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        {/* 🔹 Adjusted layout: image takes a bit more width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 🔹 Increased width by using max-w-lg */}
          <div className="max-w-lg mx-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-h-[450px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-serif text-white mb-2">{product.name}</h1>
              <p className="text-2xl font-serif text-white">${product.price.toLocaleString()}</p>
            </div>

            <div className="text-gray-300">
              <p>{product.description}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Features</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="border border-gray-700 p-4 rounded-lg bg-gray-800/50">
                <div className="flex items-center mb-2">
                  <Ruler className="w-5 h-5 text-gray-400 mr-2" />
                  <h4 className="font-medium text-white">Dimensions</h4>
                </div>
                <div className="text-sm text-gray-300">
                  <p>Width: {product.dimensions.width}cm</p>
                  <p>Height: {product.dimensions.height}cm</p>
                  <p>Depth: {product.dimensions.depth}cm</p>
                </div>
              </div>

              <div className="border border-gray-700 p-4 rounded-lg bg-gray-800/50">
                <div className="flex items-center mb-2">
                  <Package className="w-5 h-5 text-gray-400 mr-2" />
                  <h4 className="font-medium text-white">Materials</h4>
                </div>
                <ul className="text-sm text-gray-300">
                  {product.materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
