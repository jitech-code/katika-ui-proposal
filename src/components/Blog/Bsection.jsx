import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const BlogSection = () => {
  const categories = [
    { id: 1, name: 'Blockchain' },
    { id: 2, name: 'Katika wallet' },
    { id: 3, name: 'Ludokin' }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-violet-500/20 to-pink-300/20 ">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-purple-500 font-bold leading-tight">
              Suivez nos activités et nos actualités sur notre blog
            </h1>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="assets/headerimage.svg" 
              alt="Blog Header" 
              className="w-full max-w-md transform transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="w-full bg-gradient-to-tl from-white to-gray-50 py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-700 text-center mb-12">
            Nos Categories
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                className="group relative px-8 py-4 text-lg font-semibold text-white
                         bg-violet-900 rounded-lg shadow-lg 
                         transform transition-all duration-200 
                         hover:bg-purple-800 hover:scale-105
                         hover:shadow-xl hover:shadow-violet-900/20
                         focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
              >
                <span className="relative z-10">{category.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Empty State Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl">
            <img 
              src="assets/empty.svg" 
              alt="Empty state" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-500/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;