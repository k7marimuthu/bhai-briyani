// import React from 'react';
import { MapPin, ChevronLeft } from 'lucide-react';

interface CheckoutProps {
  onBack: () => void;
}

const Checkout = ({ onBack }: CheckoutProps) => {
  return (
    <div className="min-h-screen bg-[#8B0000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="flex items-center text-white text-2xl mb-8">Checkout</h2>
        {/* Header */}
        <div className="flex items-center text-white mb-8">
          <button 
            onClick={onBack}
            className="flex items-center hover:bg-white/10 rounded-full p-2 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 mr-2" />
            
            <span className="text-xl">Back</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Delivery Details */}
          <div>
            <div className="bg-white rounded-lg p-6">
              <input
                type="text"
                placeholder="Sri Ram, 7408564910"
                className="w-full p-3 border rounded-lg mb-4"
              />
              <div className="text-sm mb-4">Your Details</div>

              {/* Delivery Options */}
              <div className="flex gap-4 mb-4">
                <button className="flex-1 bg-green-100 text-green-800 py-2 rounded-lg">
                  Delivery Now
                </button>
                <button className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg">
                  Delivery Later
                </button>
              </div>

              {/* Address Selection */}
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5" />
                <span>Choose a delivery address</span>
              </div>

              <button className="w-full bg-orange-500 text-white py-2 rounded-lg">
                Add Address
              </button>

              {/* Payment Section */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <span>Payment</span>
                  <button className="bg-gray-200 px-4 py-2 rounded-lg">
                    Make Payment
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Cart Summary */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Your Cart</h2>
              <button className="text-red-600">Remove all items</button>
            </div>

            {/* Cart Items */}
            <div className="space-y-6">
              <CartItem
                name="Mutton Hyderabadi Dum Biryani [1/2 Kg] [2pcs]"
                price={499}
              />
              <CartItem
                name="Dal Makhani [400gms] + 4 Rumali Roti [1pc] Gulab Jamun"
                price={299}
              />
            </div>

            {/* Add Ons */}
            <div className="mt-6 border-t pt-4">
              <div className="flex items-start gap-2 mb-4">
                <input type="checkbox" className="mt-1" />
                <div>
                  <div className="flex justify-between">
                    <span>Add Angithi Box</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Our mini Angethis provides extra 8-10 minutes of dum to your Biryani right before serving.Free with Every Biryani Order
                  </p>
                </div>
              </div>

              {/* Kitchen Instructions */}
              <div className="mb-4">
                <h3 className="mb-2">Add Kitchen Instruction</h3>
                <textarea
                  placeholder="Write instruction here"
                  className="w-full p-3 border rounded-lg"
                  rows={2}
                />
              </div>

              {/* Offer Code */}
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Add Offer / Refer Code"
                  className="flex-1 p-3 border rounded-lg"
                />
                <button className="bg-green-600 text-white px-4 rounded-lg">
                  Apply Offer
                </button>
              </div>

              {/* BBK Loyalty */}
              <div className="flex items-start gap-2 mb-4">
                <input type="checkbox" className="mt-1" />
                <div>
                  <div className="flex justify-between">
                    <div>
                      <span className="font-semibold">BBK Loyalty</span>
                      <span className="text-sm text-gray-500"> (You Points - 100)</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Use Points ₹79.80 to get ₹79.80 discount
                  </p>
                </div>
              </div>

              {/* Donation */}
              <div className="flex items-start gap-2 mb-6">
                <input type="checkbox" className="mt-1" />
                <div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Make a Donation</span>
                    <span>₹2</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Support Feed-On in empowering women & fostering environmental sustainability
                  </p>
                </div>
              </div>

              {/* Billing Details */}
              <div className="space-y-2">
                <h3 className="font-semibold mb-3">Billing Details</h3>
                <div className="flex justify-between">
                  <span>Sub Total</span>
                  <span>₹798</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span>₹39</span>
                </div>
                <div className="flex justify-between">
                  <span>Packing charge</span>
                  <span>₹25</span>
                </div>
                <div className="flex justify-between">
                  <span>CGST (2.5%)</span>
                  <span>₹21.55</span>
                </div>
                <div className="flex justify-between">
                  <span>SGST (2.5%)</span>
                  <span>₹21.55</span>
                </div>
              </div>
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
}

const CartItem = ({ name, price }: CartItemProps) => (
  <div className="flex justify-between items-center">
    <div className="flex-1">
      <h3 className="font-medium">{name}</h3>
      <div className="flex items-center gap-2 mt-2">
        <div className="flex items-center bg-gray-100 rounded-lg">
          <button className="px-3 py-1">-</button>
          <span className="px-3">1</span>
          <button className="px-3 py-1">+</button>
        </div>
      </div>
    </div>
    <div className="text-right">
      <p className="font-semibold">₹{price}/-</p>
    </div>
  </div>
);

export default Checkout;