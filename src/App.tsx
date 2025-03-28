import React, { useState } from 'react';

import { MapPin, ShoppingCart } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Offers from './components/Offers';
import Categories from './components/Categories';
import BiryaniCombos from './components/BiryaniCombos';
import Kebabs from './components/Kebabs';
import HyderabadiBiryani from './components/HyderabadiBiryani';
import LunchCombos from './components/LunchCombos';
import ServingCities from './components/ServingCities';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import BookTable from './components/BookTable';
import SearchPage from './components/Search';
import LocationModal from './components/LocationModal';
import AddToCartModal from './components/AddToCartModal';
import Cart from './components/Cart';

type Page = 'home' | 'book-table' | 'checkout' | 'search' | 'menu';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isAddToCartModalOpen, setIsAddToCartModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleAddToCart = (item: any) => {
    setSelectedItem(item);
    setIsAddToCartModalOpen(true);
  };

  const handleLocationSelect = (location: string) => {
    console.log('Selected location:', location);
    // Handle location selection
  };

  const handleCartCheckout = () => {
    setIsCartOpen(false);
    setCurrentPage('checkout');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'book-table':
        return <BookTable onBack={() => setCurrentPage('home')} />;
      case 'checkout':
        return <Checkout onBack={() => setCurrentPage('home')} />;
      case 'search':
        return <SearchPage onBack={() => setCurrentPage('home')} />;
      case 'menu':
      case 'home':
      default:
        return (
          <>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <HeroBanner />
              <Offers />
              <Categories />
              <LunchCombos onAddToCart={handleAddToCart} />
              <HyderabadiBiryani onAddToCart={handleAddToCart} />
              <BiryaniCombos onAddToCart={handleAddToCart} />
              <Kebabs onAddToCart={handleAddToCart} />
              <ServingCities />
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        onBookTableClick={() => setCurrentPage('book-table')} 
        onOrderClick={() => setIsCartOpen(true)}
        onSearchClick={() => setCurrentPage('search')}
        onMenuClick={() => setCurrentPage('home')}
        onLocationClick={() => setIsLocationModalOpen(true)}
        currentPage={currentPage}
      />
      {renderPage()}

      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        onConfirm={handleLocationSelect}
      />

      <AddToCartModal
        isOpen={isAddToCartModalOpen}
        onClose={() => setIsAddToCartModalOpen(false)}
        item={selectedItem}
        onAddToCart={(quantity, accompaniment) => {
          console.log('Added to cart:', { quantity, accompaniment });
          setIsCartOpen(true);
        }}
      />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCartCheckout}
      />
    </div>
  );
}

export default App;