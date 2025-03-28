import  { useState } from 'react';

interface OfferDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OfferDetailsModal = ({ isOpen, onClose }: OfferDetailsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Offer Details</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>

          <div className="mb-6">
            <img 
              src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80" 
              alt="Offer" 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">FLAT 25% OFF on Take Away Orders</h3>
            <p className="text-gray-600 mb-2">No minimum order amount.</p>
            <p className="text-gray-600">Now get FLAT 25% OFF on all Take Away Orders for website and APP</p>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-3">Terms and Condition</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
              <li>This Coupon code can be applied only once in 2 hours</li>
              <li>Valid on BBK APP and website only</li>
              <li>This offer cannot be clubbed with any other offer.</li>
              <li>Offer not valid on combos or already discounted offer.</li>
              <li>Offer applicable on min. order amount of Rs 199 & above.</li>
              <li>Max discount Rs 3000 per order.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

const offers = [
  "FLAT 25% OFF on Take Away Orders",
  "FLAT 25% OFF on Take Away Orders",
  "FLAT 25% OFF on Take Away Orders",
  "FLAT 25% OFF on Take Away Orders"
];

const Offers = () => {
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Offers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {offers.map((offer, index) => (
          <div 
            key={index}
            onClick={() => setSelectedOffer(index)}
            className="bg-white border-2 border-[#8B0000] rounded-lg p-4 text-center cursor-pointer hover:bg-[#8B0000] hover:text-white transition-colors"
          >
            <p className="font-semibold">{offer}</p>
            <p className="text-sm text-gray-500">No minimum order amount</p>
          </div>
        ))}
      </div>

      <OfferDetailsModal 
        isOpen={selectedOffer !== null}
        onClose={() => setSelectedOffer(null)}
      />
    </section>
  );
};

export default Offers;