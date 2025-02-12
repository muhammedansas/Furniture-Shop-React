import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductGrid } from '../components/ProductGrid';
import { products, categories } from '../data/products';

export const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = categories.find(c => c.id === categoryId);
  const categoryProducts = products.filter(product => product.category === categoryId);

  if (!category) {
    return <div className="text-center py-12">Category not found</div>;
  }

  return (
    <div className="pt-20">
    <ProductGrid 
      products={categoryProducts} 
      title={`${category.name} Collection`}
    />
  </div>
  );
};