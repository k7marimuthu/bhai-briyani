// import React from 'react';
import ProductCard from './ProductCard';

const biryanis = [
  {
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80",
    title: "Veg Hyderabadi Biryani [1/2 kg]",
    description: "Serves 1-2 fresh vegetables are marinated in a mixture of freshly ground rice spices & layered with long grain basmati rice",
    price: 389,
    ordersLastWeek: 562,
    discount: "Get Rs 120 OFF | Use code: BBK120"
  },
  {
    image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&q=80",
    title: "Veg Hyderabadi Dum Biryani [1kg]",
    description: "Serves 2-3 Available in 1/2 kg and 1kg. Fresh vegetables are marinated in mixture of freshly ground rice spices & layered with long grain basmati rice",
    price: 699,
    ordersLastWeek: 2056,
    discount: "Get Rs 120 OFF | Use code: BBK120"
  },
  {
    image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&q=80",
    title: "Veg Hyderabadi Dum Biryani [1kg]",
    description: "Serves 2-3 Available in 1/2 kg and 1kg. Fresh vegetables are marinated in mixture of freshly ground rice spices & layered with long grain basmati rice",
    price: 699,
    ordersLastWeek: 2056,
    discount: "Get Rs 120 OFF | Use code: BBK120"
  }
];

const HyderabadiBiryani = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Hyderabadi Biryani</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {biryanis.map((biryani, index) => (
          <ProductCard key={index} {...biryani} />
        ))}
      </div>
    </section>
  );
};

export default HyderabadiBiryani;