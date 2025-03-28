import { useState } from 'react';
import {  MapPin } from 'lucide-react';
// import Navbar from './Navbar';
import Footer from './Footer';

const BookTable = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [viewType, setViewType] = useState<'all' | 'near' | 'dine'>('all');

  const locations = [
    { name: 'Chennai', time: '10 am to 5 pm' },
    { name: 'Madurai', time: '10 am to 5 pm' },
    { name: 'Tambaram', time: '10 am to 5 pm' },
    { name: 'Amritsar', time: '10 am to 5 pm' },
    { name: 'Agra', time: '10 am to 5 pm' },
    { name: 'Bhopal', time: '10 am to 5 pm' },
    { name: 'Bhubaneswar', time: '10 am to 5 pm' },
    { name: 'Chandigarh', time: '10 am to 5 pm' },
    { name: 'Dhanbad', time: '10 am to 5 pm' },
    { name: 'Durgapur', time: '10 am to 5 pm' },
    { name: 'Dehradun', time: '10 am to 5 pm' },
    { name: 'Goa', time: '10 am to 5 pm' },
    { name: 'Hyderabad', time: '10 am to 5 pm' },
    { name: 'Guwahati', time: '10 am to 5 pm' },
    { name: 'Gwalior', time: '10 am to 5 pm' },
    { name: 'Greater Noida', time: '10 am to 5 pm' },
    { name: 'Gorakhpur', time: '10 am to 5 pm' },
    { name: 'Ghaziabad', time: '10 am to 5 pm' }
  ];

  return (
    <div className="min-h-screen bg-[#8B0000]">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Profile Section */}
        <div className="bg-yellow-400 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">User 1</h2>
              <p className="text-sm">Edit Profile</p>
            </div>
          </div>
        </div>

        {/* Location Search */}
        <div className="mb-8">
          <div className="flex gap-4 mb-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Store location"
                className="w-full pl-10 pr-4 py-2 rounded-lg"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
          </div>

          <h2 className="text-xl font-bold text-white mb-4">Bhai Biryani - Outlets</h2>
          
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setViewType('all')}
              className={`px-4 py-2 rounded-full ${
                viewType === 'all' ? 'bg-yellow-400 text-black' : 'bg-white/10 text-white'
              }`}
            >
              All Stores
            </button>
            <button
              onClick={() => setViewType('near')}
              className={`px-4 py-2 rounded-full ${
                viewType === 'near' ? 'bg-yellow-400 text-black' : 'bg-white/10 text-white'
              }`}
            >
              Near by Store
            </button>
            <button
              onClick={() => setViewType('dine')}
              className={`px-4 py-2 rounded-full ${
                viewType === 'dine' ? 'bg-yellow-400 text-black' : 'bg-white/10 text-white'
              }`}
            >
              Dine in Stores
            </button>
          </div>
        </div>

        {/* Store Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <div key={index} className="bg-[#6B0000] rounded-lg p-6">
              <div className="flex items-start gap-4">
                <img src="/Group 39781.png" alt="Bhai Biryani" className="w-16 h-16 object-contain" />
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-1">
                    Bhai Biryani - {location.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">{location.time}</p>
                  <div className="flex gap-3">
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300 transition-colors">
                      Book A Table
                    </button>
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300 transition-colors">
                      Get Direction
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookTable;