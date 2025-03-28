import  { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    name: string;
    image: string;
    price: number;
    description: string;
  };
  onAddToCart: (quantity: number, accompaniment: string) => void;
}

const AddToCartModal = ({ isOpen, onClose, item, onAddToCart }: AddToCartModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('1/2kg');
  const [selectedAccompaniment, setSelectedAccompaniment] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#8B0000]/95 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left side - Image and basic info */}
          <div className="p-6 bg-[#8B0000]">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-white mb-2">{item.name}</h2>
            <p className="text-white/80 mb-4">{item.description}</p>
            <div className="flex items-center gap-8 text-white">
              <div>
                <p className="text-sm">25 min preparation</p>
              </div>
              <div>
                <p className="text-sm">548 People ordered in the last week</p>
              </div>
              <div>
                <p className="text-sm">Serve for 1-2</p>
              </div>
            </div>
          </div>

          {/* Right side - Options and add to cart */}
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Choose Quantity (select any 1)</h3>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Size Selection */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Veg Hyd Biryani [1/2 Kg]</p>
                  <p className="text-sm text-gray-500">Serve for 1-2</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">₹729</span>
                  <input
                    type="radio"
                    checked={selectedSize === '1/2kg'}
                    onChange={() => setSelectedSize('1/2kg')}
                    className="h-4 w-4"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Veg Hyd Biryani [1 Kg]</p>
                  <p className="text-sm text-gray-500">Serve for 3-4</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">₹729</span>
                  <input
                    type="radio"
                    checked={selectedSize === '1kg'}
                    onChange={() => setSelectedSize('1kg')}
                    className="h-4 w-4"
                  />
                </div>
              </div>
            </div>

            {/* Accompaniments */}
            <h3 className="text-xl font-bold mb-4">Choose your free Accompaniment</h3>
            <div className="space-y-4 mb-8">
              {['Raita', 'Salna', 'I Love Biryani without adding anything'].map((acc) => (
                <div key={acc} className="flex justify-between items-center p-4 border rounded-lg">
                  <span className="font-medium">{acc}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">₹0</span>
                    <input
                      type="radio"
                      checked={selectedAccompaniment === acc}
                      onChange={() => setSelectedAccompaniment(acc)}
                      className="h-4 w-4"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 bg-gray-100 rounded-lg p-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => {
                  onAddToCart(quantity, selectedAccompaniment);
                  onClose();
                }}
                className="bg-orange-500 text-white px-8 py-2 rounded-lg hover:bg-orange-600"
              >
                Add Item ₹{item.price * quantity}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;