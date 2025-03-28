// import React from 'react';
import ProductCard from './ProductCard';

const kebabs = [
  {
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80",
    title: "Veg Platter + 2 x Rumali Roti",
    description: "Includes: 4 pcs Veg Galouti, 4 pcs Kaju Seekh, 3 pcs Crispy Corn Stick, 4 pcs Kasturi Paneer. Served with spicy dip, mint chutney & onion sauce + 2 Rumali Roti",
    price: 649,
    ordersLastWeek: 597,
    discount: "Get Rs 120 OFF | Use code: BBK120"
  },
  {
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80",
    title: "Crispy Corn Stick [6 pcs]",
    description: "Includes: 6 pcs Veg Kaju Seekh. Served with spicy dip, mint chutney & onion sauce",
    price: 649,
    ordersLastWeek: 597,
    discount: "Get Rs 120 OFF | Use code: BBK120"
  },
  {
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80",
    title: "Crispy Corn Stick [6 pcs]",
    description: "Includes: 6 pcs Veg Kaju Seekh. Served with spicy dip, mint chutney & onion sauce",
    price: 649,
    ordersLastWeek: 597,
    discount: "Get Rs 120 OFF | Use code: BBK120"
  },
  {
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80",
    title: "Crispy Corn Stick [6 pcs]",
    description: "Includes: 6 pcs Veg Kaju Seekh. Served with spicy dip, mint chutney & onion sauce",
    price: 649,
    ordersLastWeek: 597,
    discount: "Get Rs 120 OFF | Use code: BBK120"
  }
];

const Kebabs = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Kebabs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {kebabs.map((kebab, index) => (
          <ProductCard key={index} {...kebab} />
        ))}
      </div>
    </section>
  );
};

export default Kebabs;