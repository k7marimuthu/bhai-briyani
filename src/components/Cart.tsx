import React from 'react';
import { Minus, Plus, X } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const Cart = ({ isOpen, onClose, onCheckout }: CartProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-y-0 right-0 max-w-xl w-full bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div>
              <h2 className="text-xl font-semibold">Your Cart</h2>
              <span className="text-sm text-gray-500">2 items</span>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              <CartItem 
                name="Mutton Hyderabadi Dum Biryani [1/2 Kg] [2pcs]" 
                price={499}
                image="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80"
              />
              <CartItem 
                name="Dal Makhani [400gms] + 4 Rumali Roti + [1pc] Gulab Jamun" 
                price={299}
                image="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80"
              />
            </div>
          </div>

          {/* Subtotal */}
          <div className="p-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Subtotal</span>
              <span className="font-bold">₹798</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Excluding GST and Delivery Charges.
            </p>
            <button 
              onClick={onCheckout}
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Checkout
            </button>
          </div>

          {/* Suggestions */}
          <div className="p-4 border-t">
            <h3 className="font-semibold mb-4">You May Also Like</h3>
            <div className="grid grid-cols-2 gap-4">
              <SuggestionItem
                name="Burani Raita"
                price={99}
                image="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CartItemProps {
  name: string;
  price: number;
  image: string;
}

const CartItem = ({ name, price, image }: CartItemProps) => (
  <div className="flex gap-4">
    <img src={image} alt={name} className="w-20 h-20 object-cover rounded-md" />
    <div className="flex-1">
      <h3 className="font-medium">{name}</h3>
      <p className="text-orange-600 font-semibold">₹{price}</p>
      <div className="flex items-center gap-2 mt-2">
        <button className="p-1 hover:bg-gray-100 rounded">
          <Minus className="h-4 w-4" />
        </button>
        <span>1</span>
        <button className="p-1 hover:bg-gray-100 rounded">
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
);

interface SuggestionItemProps {
  name: string;
  price: number;
  image: string;
}

const SuggestionItem = ({ name, price, image }: SuggestionItemProps) => (
  <div className="border rounded-lg p-2">
    <img src={image} alt={name} className="w-full h-24 object-cover rounded-md mb-2" />
    <h4 className="font-medium">{name}</h4>
    <div className="flex justify-between items-center mt-2">
      <span className="font-bold">₹{price}</span>
      <button className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600">
        Add
      </button>
    </div>
  </div>
);

export default Cart;