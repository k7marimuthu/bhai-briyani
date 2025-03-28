import  { useState } from "react";
import { MapPin, ShoppingCart, User, Search as SearchIcon } from "lucide-react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import Cart from "./Cart";



interface NavbarProps {
  onBookTableClick?: () => void;
  onOrderClick?: () => void;
  onSearchClick?: () => void;
  onMenuClick?: () => void;
  onLocationModalclick?: () => void;
  currentPage?: string;
}

const Navbar = ({ 
  onBookTableClick, 
  onOrderClick, 
  onSearchClick,
  onMenuClick,
  onLocationModalclick,
  // currentPage = 'home'
}: NavbarProps) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleSwitchToSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <>
      <nav className="bg-[#8B0000] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={onMenuClick} className="flex items-center">
                <img src="/Group 39781.png" alt="Bhai Biryani" className="h-12" />
              </button>

              {/* Location Section */}
              <div className="ml-4 flex flex-col text-white">
                <h3 className="text-lg font-bold">Location</h3>
                <div className="flex items-center bg-[#6B0000] px-4 py-2 rounded-md cursor-pointer hover:bg-[#5B0000] transition-colors">
                  <MapPin className="h-5 w-5" />
                  <span  onClick={onLocationModalclick}className="ml-2 font-medium">Enter Area</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button 
                onClick={onSearchClick}
                className="text-white hover:text-gray-200 flex items-center gap-8"
              >
                <SearchIcon className="h-5 w-5" />
                <span className="hidden sm:inline">Search</span>
              </button>
              <a href="#"  onClick={onBookTableClick} className="text-white hover:text-gray-200">
                Outlets
              </a>
              <button 
                onClick={onMenuClick}
                className="text-white hover:text-gray-200"
              >
                Menu
              </button>
              
              <button 
                onClick={onBookTableClick}
                className="text-white hover:text-gray-200"
              >
                Book A Table
              </button>

              {/* Login Button */}
              <button
                className="bg-[#FFD700] text-black px-4 py-2 rounded-md font-bold flex items-center hover:bg-[#FFC300] transition-colors"
                onClick={() => setIsLoginOpen(true)}
              >
                <User className="h-5 w-5 mr-2" /> 
                <span className="hidden sm:inline">Login</span>
              </button>

              {/* Cart Button */}
              <button 
                className="bg-[#FFA500] text-white px-4 py-2 rounded-md flex items-center hover:bg-[#FF9000] transition-colors"
                onClick={onOrderClick}
              >
                <ShoppingCart className="h-5 w-5 sm:mr-2" />
                <span className="hidden sm:inline">Order Now</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onSwitchToSignup={handleSwitchToSignup}
      />

      {/* Signup Modal */}
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />

      {/* Cart Modal */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
};

export default Navbar;