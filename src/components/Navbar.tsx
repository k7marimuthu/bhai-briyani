import  { useState } from "react";
import { MapPin, ShoppingCart, User, Search as SearchIcon, Menu, X } from "lucide-react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import Cart from "./Cart";

interface NavbarProps {
  onBookTableClick?: () => void;
  onOrderClick?: () => void;
  onSearchClick?: () => void;
  onMenuClick?: () => void;
  currentPage?: string;
}

const Navbar = ({ 
  onBookTableClick, 
  onOrderClick, 
  onSearchClick,
  onMenuClick,
  currentPage = 'home'
}: NavbarProps) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav className="bg-[#8B0000] py-2 md:py-4 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="flex items-center justify-between">
            {/* Logo and Location Section */}
            <div className="flex items-center flex-1">
              <button onClick={onMenuClick} className="flex items-center">
                <img src="/src/components/Group 39781.png" alt="Bhai Biryani" className="h-8 md:h-12" />
              </button>

              {/* Location Section - Hidden on mobile */}
              <div className="hidden md:flex ml-4 flex-col text-white">
                <h3 className="text-lg font-bold">Location</h3>
                <div className="flex items-center bg-[#6B0000] px-4 py-2 rounded-md cursor-pointer hover:bg-[#5B0000] transition-colors">
                  <MapPin className="h-5 w-5" />
                  <span className="ml-2 font-medium">Enter Area</span>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Menu Items */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <button 
                onClick={onSearchClick}
                className="text-white hover:text-gray-200 flex items-center gap-2"
              >
                <SearchIcon className="h-5 w-5" />
                <span>Search</span>
              </button>
              <button 
                onClick={onBookTableClick}
                className="text-white hover:text-gray-200"
              >
                Outlets
              </button>
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
                <span>Login</span>
              </button>

              {/* Cart Button */}
              <button 
                className="bg-[#FFA500] text-white px-4 py-2 rounded-md flex items-center hover:bg-[#FF9000] transition-colors"
                onClick={onOrderClick}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                <span>Order Now</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-[#8B0000] z-50 border-t border-[#6B0000] shadow-lg`}>
            {/* Mobile Location */}
            <div className="p-4 border-b border-[#6B0000]">
              <h3 className="text-white text-lg font-bold mb-2">Location</h3>
              <div className="flex items-center bg-[#6B0000] px-4 py-2 rounded-md cursor-pointer">
                <MapPin className="h-5 w-5 text-white" />
                <span className="ml-2 text-white font-medium">Enter Area</span>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex flex-col p-4 space-y-4">
              <button 
                onClick={onSearchClick}
                className="text-white hover:text-gray-200 flex items-center gap-2"
              >
                <SearchIcon className="h-5 w-5" />
                <span>Search</span>
              </button>
              <a href="#" className="text-white hover:text-gray-200">
                Outlets
              </a>
              <button 
                onClick={onMenuClick}
                className="text-white hover:text-gray-200"
              >
                Menu
              </button>
              <a href="#" className="text-white hover:text-gray-200">
                Bulk Orders
              </a>
              <button 
                onClick={onBookTableClick}
                className="text-white hover:text-gray-200"
              >
                Book A Table
              </button>

              {/* Mobile Action Buttons */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-[#6B0000]">
                <button
                  className="bg-[#FFD700] text-black px-4 py-2 rounded-md font-bold flex items-center justify-center hover:bg-[#FFC300] transition-colors"
                  onClick={() => setIsLoginOpen(true)}
                >
                  <User className="h-5 w-5 mr-2" /> 
                  <span>Login</span>
                </button>

                <button 
                  className="bg-[#FFA500] text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-[#FF9000] transition-colors"
                  onClick={onOrderClick}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Modals */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onSwitchToSignup={handleSwitchToSignup}
      />
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
};

export default Navbar;
