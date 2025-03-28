import  { useState } from 'react';
import { Search as SearchIcon, ChevronLeft } from 'lucide-react';

interface SearchProps {
  onBack: () => void;
}

const Search = ({ onBack }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-[#8B0000] pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={onBack}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        {/* Recent Searches */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Recent Searches</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-gray-600">
              <span>Hyderabadi Biryani</span>
              <button className="text-sm text-[#8B0000]">Remove</button>
            </div>
            <div className="flex items-center justify-between text-gray-600">
              <span>Chicken Kebab</span>
              <button className="text-sm text-[#8B0000]">Remove</button>
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Popular Searches</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              'Biryani',
              'Kebab',
              'Lunch Combo',
              'Mandhi',
              'Dal Makhani',
              'Rumali Roti',
              'Paneer Dishes',
              'Desserts'
            ].map((item, index) => (
              <button
                key={index}
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;