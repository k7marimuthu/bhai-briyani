// import React from 'react';
import ProductCard from './ProductCard';

const biryaniCombos = [
  {
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80",
    title: "Veg Biryani Combo",
    description: "Veg Hyderabadi Biryani [1/2 kg] + Choice of Veg Galouti Kebab / Crispy Corn Stick + 2 Thumbs Up [250 ml]",
    price: 729,
    ordersLastWeek: 548,
    discount: "Get Rs 120 OFF | Use code: BBK120"
  },
  {
    image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&q=80",
    title: "Paneer Biryani Combo",
    description: "Paneer Hyderabadi Biryani [1/2 kg] + Choice of Veg Galouti Kebab / Crispy Corn Stick + 2 Thumbs Up [250 ml]",
    price: 738,
    ordersLastWeek: 562,
    discount: "Get Rs 120 OFF | Use code: BBK120"
  },
  {
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80",
    title: "Veg Biryani Combo",
    description: "Veg Hyderabadi Biryani [1/2 kg] + Choice of Veg Galouti Kebab / Crispy Corn Stick + 2 Thumbs Up [250 ml]",
    price: 729,
    ordersLastWeek: 548,
    discount: "Get Rs 120 OFF | Use code: BBK120"
  }
];

const BiryaniCombos = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Everyday Biryani Combos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {biryaniCombos.map((combo, index) => (
          <ProductCard key={index} {...combo} />
        ))}
      </div>
    </section>
  );
};

export default BiryaniCombos;