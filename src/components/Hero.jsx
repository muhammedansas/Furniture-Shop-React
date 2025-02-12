import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section
      className="relative h-[90vh] bg-black overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1920x1080/?furniture,interior')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center pt-20">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
            Elevate Your Living Space
          </h1>
          <p className="text-xl text-gray-200 mb-12">
            Discover our curated collection of premium furniture pieces designed to transform your home.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 hover:bg-gray-100 transition-colors"
          >
            <span className="font-medium">Explore Collection</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
