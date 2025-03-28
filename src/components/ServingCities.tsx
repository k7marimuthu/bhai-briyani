import React from 'react';

const cities = [
  ['Amritsar', 'Agra', 'Bhopal', 'Bhubaneswar'],
  ['Chandigarh', 'Dhanbad', 'Durgapur', 'Dehradun'],
  ['Gurgaon', 'Ghaziabad', 'Greater Noida', 'Guwahati'],
  ['Gorakhpur', 'Gwalior', 'Goa', 'Hyderabad']
];

const ServingCities = () => {
  return (
    <section className="mb-12 bg-[#8B0000] text-white p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Biryani By Kilo - Cities We are Serving</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cities.map((column, columnIndex) => (
          <div key={columnIndex}>
            {column.map((city, cityIndex) => (
              <div key={cityIndex} className="mb-2 hover:text-yellow-500 cursor-pointer">
                {city}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServingCities;