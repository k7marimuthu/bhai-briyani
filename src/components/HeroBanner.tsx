// import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative rounded-lg overflow-hidden mb-12">
      <img 
        src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80"
        alt="Biryani Party"
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
        <div className="h-full flex items-center max-w-2xl px-8">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">BBK Presents BIRYANI PARTY</h1>
            <div className="space-y-2">
              <p className="text-2xl">UNLIMITED Biryani, Kebabs & Desserts</p>
              <p className="text-xl">EVERY WED & SUN</p>
              <div className="mt-4">
                <span className="bg-yellow-500 px-4 py-2 rounded-md">
                  LUNCH Starting @ ₹499*
                </span>
                <span className="bg-yellow-500 px-4 py-2 rounded-md ml-4">
                  DINNER Starting @ ₹599*
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;