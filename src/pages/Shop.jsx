import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { products } from '../data/products';

export const Shop = () => {
  return (
    <div className="pt-20">
      <ProductGrid products={products} title="All Products" />
    </div>
  );
};