import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const platforms = [
  { name: 'Big Commerce', icon: 'B' },
  { name: 'Wix', icon: 'WiX' },
  { name: 'Squarespace', icon: 'S' },
  { name: 'WooCommerce', icon: 'Woo' },
  { name: 'API', icon: 'API' },
  { name: 'Prestashop', icon: 'P' },
  { name: 'Shopify', icon: 'S' },
  { name: 'Etsy', icon: 'Etsy' },
];

const IntegrationSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Connect your store
        </h2>
        <p className="text-xl text-gray-500">
          Printify easily integrates with major e-commerce platforms and marketplaces
        </p>
      </div>
      <div className="relative h-[300px] mt-16">
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center z-10 relative">
            <span className="text-white text-3xl">P</span>
          </div>
        </motion.div>
        {platforms.map((platform, index) => (
          <React.Fragment key={platform.name}>
            <motion.div
              className="absolute left-1/2 top-1/2"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={isVisible ? {
                x: `${Math.cos(index * (Math.PI / 4) - Math.PI / 2) * 120}px`,
                y: `${Math.sin(index * (Math.PI / 4) - Math.PI / 2) * 120}px`,
                opacity: 1
              } : {}}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-white shadow-md rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold">{platform.icon}</span>
              </div>
            </motion.div>
            <motion.div
              className="absolute left-1/2 top-1/2 w-[120px] h-[120px] pointer-events-none"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 0.3 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              style={{
                transformOrigin: 'center',
                transform: `rotate(${index * 45}deg)`,
              }}
            >
              <div className="w-full h-[1px] bg-gray-300 absolute top-1/2 left-1/2 transform -translate-y-1/2"></div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default IntegrationSection;
