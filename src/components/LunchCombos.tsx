// import React from 'react'; 
import ProductCard from './ProductCard';

const lunchCombos = [
  {
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80",
    title: "Dal Makhani [400gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
    description: "Creamy dal makhani served with fresh rumali rotis and dessert",
    price: 299,
    ordersLastWeek: 504,
    discount: "Get Rs 120 OFF | Use code: BBK120"
  },
  {
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80",
    title: "Paneer Nawabi [500gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
    description: "Rich and creamy paneer curry with soft rumali rotis and dessert",
    price: 329,
    ordersLastWeek: 505,
    discount: "Get Rs 120 OFF | Use code: BBK120"
  },
  {
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80",
    title: "Dal Makhani [400gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
    description: "Creamy dal makhani served with fresh rumali rotis and dessert",
    price: 299,
    ordersLastWeek: 504,
    discount: "Get Rs 120 OFF | Use code: BBK120"
  }
];

const LunchCombos = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Lunch Combos starting @299</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lunchCombos.map((combo, index) => (
          <ProductCard key={index} {...combo} />
        ))}
      </div>
    </section>
  );
};

export default LunchCombos;