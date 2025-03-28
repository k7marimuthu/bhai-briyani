// import React from 'react';

import { Utensils } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-4 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Utensils className="h-6 w-6 text-yellow-500" />
                <span className="text-xl font-bold">Bhai Biryani</span>
              </div>
              <p className="text-sm text-black-300 mb-6">
                Experience the authentic taste of traditional biryani, crafted with passion and served with love.
                Every serving is a tribute to authenticity.
              </p>
              
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-3 text-sm text-black-300">
                <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-500">Our Specialties</a></li>
                <li><a href="#" className="hover:text-yellow-500">News</a></li>
                <li><a href="#" className="hover:text-yellow-500">Menu</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-black-300">
                <li><a href="#" className="hover:text-yellow-500">Support Portal</a></li>
                <li><a href="#" className="hover:text-yellow-500">Community</a></li>
                <li><a href="#" className="hover:text-yellow-500">Documentation</a></li>
                <li><a href="#" className="hover:text-yellow-500">Contact Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3 text-sm text-black-300">
                <li><a href="#" className="hover:text-yellow-500">Have a Question?</a></li>
                <li><a href="#" className="hover:text-yellow-500">Find a Location</a></li>
                <li><a href="#" className="hover:text-yellow-500">Get the App</a></li>
                <li><a href="#" className="hover:text-yellow-500">View Offers</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-red-900">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-black-300 mb-4 md:mb-0">
                © 2024 Royal Biryani. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-black-300">
                <a href="#" className="hover:text-yellow-500">Privacy Policy</a>
                <a href="#" className="hover:text-yellow-500">Terms of Service</a>
                <a href="#" className="hover:text-yellow-500">Cookie Settings</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  
  );
};


export default Footer;