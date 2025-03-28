import  { useState } from 'react';
import { MapPin, ShoppingCart, User, ChevronLeft, ChevronRight, Star,  Utensils, Clock, Award } from 'lucide-react';
import Footer from './Footer';

interface ProductDetailsProps {
  image: string;
  title: string;
  description: string;
  price: number;
  onClose: () => void;
}

const ProductDetails = ({ image, title, description, price, onClose }: ProductDetailsProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  
  const images = [
    image,
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80"
  ];

  const menuItems = [
    {
      id: "biryani",
      icon: "🍚",
      name: "Biryani",
      title: "Hyderabadi Dum Biryani",
      description: "A fragrant mix of basmati rice, marinated meat, and saffron, slow-cooked to perfection in traditional dum style",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80"
    },
    {
      id: "fried-rice",
      icon: "🍛",
      name: "Fried Rice",
      title: "Special Fried Rice",
      description: "Aromatic rice stir-fried with fresh vegetables and choice of protein",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80"
    },
    {
      id: "fries",
      icon: "🍟",
      name: "Fries",
      title: "Masala Fries",
      description: "Crispy fries tossed in special Indian spices",
      image: "https://images.unsplash.com/photo-1606755456206-b25206cde27e?auto=format&fit=crop&q=80"
    },
    {
      id: "combo",
      icon: "🍽️",
      name: "Combo",
      title: "Family Feast",
      description: "Perfect combination of biryani, kebabs, and desserts",
      image: "https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="fixed inset-0 bg-[#8B0000] overflow-y-auto z-50">
      {/* Header */}
      <header className="sticky top-0 bg-[#8B0000] shadow-lg z-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Bar */}
          <div className="border-b border-[#6B0000]">
            <div className="py-2 px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between text-white text-sm">
                <div className="flex items-center space-x-4">
                  <span>Download App</span>
                  <span>|</span>
                  <span>Contact Us</span>
                </div>
                <div className="hidden sm:flex items-center space-x-4">
                  <span>Track Order</span>
                  <span>|</span>
                  <span>Find a Store</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button 
                  onClick={onClose}
                  className="mr-4 text-white hover:bg-white/10 p-2 rounded-full transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <div className="flex flex-col text-white">
                  <h3 className="text-lg font-bold">Location</h3>
                  <div className="flex items-center bg-[#6B0000] px-4 py-2 rounded-md cursor-pointer hover:bg-[#5B0000] transition-colors">
                    <MapPin className="h-5 w-5" />
                    <span className="ml-2 font-medium hidden sm:inline">Enter Area</span>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-6 text-white">
                <a href="#" className="hover:text-gray-200">Search</a>
                <a href="#" className="hover:text-gray-200">Outlets</a>
                <a href="#" className="hover:text-gray-200">Menu</a>
                <a href="#" className="hover:text-gray-200">Bulk Orders</a>
                <a href="#" className="hover:text-gray-200">Book A Table</a>
              </div>

              <div className="flex items-center space-x-4">
                <button className="bg-[#FFD700] text-black px-4 py-2 rounded-md font-bold hidden sm:flex items-center hover:bg-[#FFC300] transition-colors">
                  <User className="h-5 w-5 mr-2" /> Login
                </button>
                <button className="bg-[#FFA500] text-white px-4 py-2 rounded-md flex items-center hover:bg-[#FF9000] transition-colors">
                  <ShoppingCart className="h-5 w-5 sm:mr-2" />
                  <span className="hidden sm:inline">Order Now</span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">Royal<br/>Biryani Bliss</h1>
              <p className="text-xl mb-8">{description}</p>
              <div className="flex items-center gap-4 mb-8">
                <button className="bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-colors">
                  Order Now
                </button>
                <span className="text-2xl font-bold">₹{price}</span>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="flex items-center text-white">
                  <Utensils className="h-6 w-6 mr-3" />
                  <span>Freshly Made</span>
                </div>
                <div className="flex items-center text-white">
                  <Award className="h-6 w-6 mr-3" />
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center text-white">
                  <Clock className="h-6 w-6 mr-3" />
                  <span>30 min delivery</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={images[selectedImage]} 
                alt={title}
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="flex gap-4 mt-4 justify-center overflow-x-auto pb-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      selectedImage === index ? 'border-yellow-500 scale-110' : 'border-transparent opacity-75'
                    }`}
                  >
                    <img src={img} alt={`${title} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section with Spices Image */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-8">A Taste That Tells a Story</h2>
          <div className="text-white text-lg mb-16 max-w-3xl">
            From the royal kitchens of the Mughals to the bustling streets of Hyderabad,
            our biryani carries a legacy of flavor and culture. Made with age-old
            recipes and premium ingredients, every serving is a tribute to authenticity.
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#6B0000]/50 rounded-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80"
                alt="Premium Spices"
                className="w-full h-64 object-cover rounded-xl mb-8"
              />
              <h3 className="text-2xl font-bold text-white mb-4">What Makes Our Biryani Special?</h3>
              <div className="space-y-4 text-white">
                <p className="text-xl">We use the finest basmati rice,<br/>fresh herbs,<br/>and premium spices.</p>
              </div>
            </div>

            <div className="space-y-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-lg">Premium long-grain basmati rice</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-lg">Hand-ground aromatic spices</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-lg">Traditional dum cooking method</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-lg">Fresh, locally-sourced ingredients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Carousel Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Signature Food Loved by Thousands</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Menu Categories */}
            <div className="md:w-1/4 flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedMenuItem(index)}
                  className={`flex items-center gap-3 p-4 rounded-lg transition-colors whitespace-nowrap ${
                    selectedMenuItem === index 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </div>

            {/* Selected Menu Item */}
            <div className="md:w-3/4">
              <div className="bg-[#6B0000] rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4">{menuItems[selectedMenuItem].title}</h3>
                    <p className="text-white/90 mb-6">{menuItems[selectedMenuItem].description}</p>
                    <button className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors">
                      Order now
                    </button>
                  </div>
                  <div className="w-full md:w-80 h-80">
                    <img 
                      src={menuItems[selectedMenuItem].image}
                      alt={menuItems[selectedMenuItem].title}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mandhi Section */}
      <section className="relative py-12 bg-[#FFA500] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#8B0000] transform skew-x-12"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-white mb-2">A Feast of Flavors!</h2>
              <h3 className="text-6xl font-bold text-[#8B0000] mb-6">MANDHI</h3>
              <p className="text-lg text-white/90 mb-8 max-w-lg">
                A flavorful Yemeni-style rice dish with tender, slow-cooked meat,
                aromatic spices, and a smoky essence, served with tangy sauces
              </p>
              <button className="bg-white text-[#8B0000] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Order Now
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80"
                alt="Mandhi"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl transform -rotate-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <p className="mb-4">"Absolutely the best biryani! The flavors are authentic, and the portions are generous."</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Aarav M.</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-[#6B0000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">FAQs</h2>
              <p className="text-white/75 mb-6">
                For any further inquiries about our menu, orders, or catering services,
                please feel free to get in touch with us
              </p>
              <a 
                href="mailto:bhaibiryani03@gmail.com" 
                className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
              >
                Contact Us
              </a>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {[
                  "How can I place an order?",
                  "Do you offer home delivery?",
                  "Can I customize my biryani?",
                  "Do you have family packs or bulk orders?",
                  "What payment options do you accept?",
                  "What if I have an issue with my order?",
                  "How can I contact customer support?"
                ].map((question, index) => (
                  <button 
                    key={index}
                    className="w-full text-left bg-white/10 text-white p-4 rounded-xl hover:bg-white/20 transition-colors flex items-center justify-between"
                  >
                    <span>{question}</span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetails;