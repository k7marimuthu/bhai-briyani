import { useState } from 'react';
import ProductDetails from './ProductDetails';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  ordersLastWeek: number;
  discount?: string;
  
}

const ProductCard = ({ image, title, description, price, ordersLastWeek, discount }: ProductCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  

  if (showDetails) {
    return (
      <ProductDetails 
        image={image}
        title={title}
        description={description}
        price={price}
        onClose={() => setShowDetails(false)}
      />
    );
  }

  return (
    <div 
      className="bg-[#8B0000] rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={() => setShowDetails(true)}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white text-2xl font-bold">₹{price}</p>
            {discount && (
              <p className="text-yellow-500 text-sm">{discount}</p>
            )}
          </div>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
            Add +
          </button>
        </div>
        <p className="text-gray-400 text-sm mt-2">
          {ordersLastWeek} People ordered in the last week
        </p>
      </div>
    </div>
  );
};

export default ProductCard;