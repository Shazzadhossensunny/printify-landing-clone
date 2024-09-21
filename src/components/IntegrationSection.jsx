import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const platforms = [
  {
    name: "Big Commerce",
    icon: "B",
    size: "sm",
    position: { top: "10%", left: "15%" },
  },
  {
    name: "Wix",
    icon: "WiX",
    size: "md",
    position: { top: "5%", right: "10%" },
  },
  {
    name: "Squarespace",
    icon: "S",
    size: "sm",
    position: { top: "30%", right: "25%" },
  },
  {
    name: "WooCommerce",
    icon: "Woo",
    size: "sm",
    position: { bottom: "20%", right: "15%" },
  },
  {
    name: "API",
    icon: "API",
    size: "lg",
    position: { bottom: "30%", left: "10%" },
  },
  {
    name: "Prestashop",
    icon: "P",
    size: "xs",
    position: { top: "40%", left: "30%" },
  },
  {
    name: "Shopify",
    icon: "S",
    size: "lg",
    position: { bottom: "10%", left: "40%" },
  },
  {
    name: "Etsy",
    icon: "Etsy",
    size: "md",
    position: { bottom: "5%", right: "30%" },
  },
];

const sizeClasses = {
  xs: "w-8 h-8 sm:w-12 sm:h-12",
  sm: "w-10 h-10 sm:w-16 sm:h-16",
  md: "w-12 h-12 sm:w-20 sm:h-20",
  lg: "w-14 h-14 sm:w-24 sm:h-24",
};

const IntegrationSection = () => {
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const updateLines = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const centerP = container.querySelector(".center-box");
        if (centerP) {
          const centerRect = centerP.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();

          const centerX =
            centerRect.left + centerRect.width / 2 - containerRect.left;
          const centerY =
            centerRect.top + centerRect.height / 2 - containerRect.top;

          const newLines = platforms
            .map((platform) => {
              const box = container.querySelector(
                `[data-platform="${platform.name}"]`
              );
              if (box) {
                const rect = box.getBoundingClientRect();
                const x2 = rect.left + rect.width / 2 - containerRect.left;
                const y2 = rect.top + rect.height / 2 - containerRect.top;
                return { x1: centerX, y1: centerY, x2, y2 };
              }
              return null;
            })
            .filter(Boolean);

          setLines(newLines);
        }
      }
    };

    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

  return (
    <div className="bg-white py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
          Connect your store
        </h2>
        <p className="text-lg sm:text-xl text-gray-500 mb-8 sm:mb-12">
          Printify easily integrates with major e-commerce platforms and
          marketplaces
        </p>
      </div>
      <div className="relative max-w-5xl mx-auto">
        <div
          ref={containerRef}
          className="relative h-[300px] sm:h-[400px] md:h-[500px]"
        >
          <svg className="absolute inset-0 w-full h-full">
            {lines.map((line, index) => (
              <motion.line
                key={`line-${index}`}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#e0e0e0"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            ))}
          </svg>
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 center-box"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-green-500 rounded-2xl flex items-center justify-center z-10 relative">
              <span className="text-white text-xl sm:text-2xl md:text-3xl">
                P
              </span>
            </div>
          </motion.div>
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              data-platform={platform.name}
              className={`absolute ${
                sizeClasses[platform.size]
              } bg-white shadow-md rounded-xl flex items-center justify-center z-20`}
              style={platform.position}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-xs sm:text-sm font-semibold">
                {platform.icon}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;
