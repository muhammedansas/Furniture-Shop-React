import React from 'react';
import { Hero } from '../components/Hero';
import { CategoryGrid } from '../components/CategoryGrid';
import { ProductGrid } from '../components/ProductGrid';
import { products } from '../data/products';

export const Home = () => {
  const featuredProducts = products.slice(0, 3);
  
  return (
    <>
      <Hero />
      <CategoryGrid />
      <ProductGrid products={featuredProducts} title="Featured Collection" />
    </>
  );
};