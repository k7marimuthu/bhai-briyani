import { useState } from 'react';
import { X, MapPin } from 'lucide-react';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (location: string) => void;
}

const LocationModal = ({ isOpen, onClose, onConfirm }: LocationModalProps) => {
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'takeaway'>('delivery');
  const [location, setLocation] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-2xl font-bold">Enter Location</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4">
          {/* Delivery Type Selection */}
          <div className="flex gap-4 mb-6">
            <button
              className={`px-6 py-2 rounded-full ${
                deliveryType === 'delivery'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => setDeliveryType('delivery')}
            >
              Delivery
            </button>
            <button
              className={`px-6 py-2 rounded-full ${
                deliveryType === 'takeaway'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => setDeliveryType('takeaway')}
            >
              Takeaway
            </button>
          </div>

          {/* Location Input */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Enter Your Area / Locality"
              className="w-full p-3 pr-10 border rounded-lg"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Detect Location Button */}
          <button className="w-full mb-6 flex items-center justify-center gap-2 border border-gray-300 p-3 rounded-lg hover:bg-gray-50">
            <MapPin className="h-5 w-5" />
            Detect Current Location
          </button>

          {/* Map */}
          <div className="h-[300px] mb-6 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29683.7351720397!2d79.5041315!3d11.931894849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1742981105556!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="text-sm text-gray-600 mb-4">
            Note: Move the map marker to change the delivery location.
          </p>

          {/* Selected Location */}
          <div className="flex items-start gap-2 mb-6">
            <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
            <p className="text-gray-700">Dinesh Complex, Patto Colony, Panaji</p>
          </div>

          {/* Confirm Button */}
          <button
            onClick={() => {
              onConfirm(location);
              onClose();
            }}
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Confirm Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;