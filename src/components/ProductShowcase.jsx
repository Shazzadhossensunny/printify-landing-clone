import React from 'react';
import FeatureCard from './FeatureCard';
import CustomProducts1 from '../assets/custom-products.webp';
import CustomProducts2 from '../assets/your-products.webp';
import CustomProducts3 from '../assets/fullfillment.webp';

const ProductShowcase = () => (
    <section className="flex flex-col md:flex-row justify-around p-8 bg-gray-100">
    <FeatureCard
      image={CustomProducts1}
      title="CREATE"
      subtitle="custom products"
      description="Easily add your designs to a wide range of products using our free tools"
    />
    <FeatureCard
      image={CustomProducts2}
      title="SELL"
      subtitle="on your terms"
      description="You choose the products, sale price, and where to sell"
    />
    <FeatureCard
      image={CustomProducts3}
      title="WE HANDLE"
      subtitle="fulfillment"
      description="Once an order is placed, we automatically handle all the printing and delivery logistics"
    />
  </section>
);

export default ProductShowcase;
