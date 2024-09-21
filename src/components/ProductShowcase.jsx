import React from 'react';
import FeatureCard from './FeatureCard';
import CustomProducts1 from '../assets/custom-products.webp';
import CustomProducts2 from '../assets/your-products.webp';
import CustomProducts3 from '../assets/fullfillment.webp';

const ProductShowcase = () => (
  <div className="bg-[#f7f7f7] py-12 sm:py-16 md:py-20 lg:py-24 relative">
    <div className="container mx-auto px-4">
      <section className="flex flex-col sm:flex-row flex-wrap justify-center gap-8">
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
    </div>
    {/* Responsive arrow-like shape */}
    <div className="absolute left-1/2 transform -translate-x-1/2 overflow-visible" style={{ bottom: '-40px' }}>
      <div
        className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px] h-[60px] sm:h-[80px] md:h-[90px] lg:h-[100px] bg-[#f7f7f7]"
        style={{
          clipPath: 'polygon(0 0, 50% 100%, 100% 0)'
        }}
      ></div>
    </div>
  </div>
);

export default ProductShowcase;
