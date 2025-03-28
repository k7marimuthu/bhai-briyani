// import React from 'react';

const categories = [
  {
    title: 'Lunch Combo Starting',
    price: '@299',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80'
  },
  {
    title: 'Hyderabadi Biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80'
  },
  {
    title: 'Everyday Biryani Combos',
    image: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&q=80'
  },
  {
    title: 'Kebabs',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80'
  }
];

const Categories = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden cursor-pointer">
            <img 
              src={category.image} 
              alt={category.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white text-xl font-semibold">{category.title}</h3>
                {category.price && (
                  <p className="text-yellow-500 mt-2">{category.price}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;