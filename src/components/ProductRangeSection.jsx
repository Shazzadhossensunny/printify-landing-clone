import React from 'react';
import { ChevronRight } from 'lucide-react';
import TShirt from '../assets/img_5.png';


export default function ProductRangeSection() {
  return (
    <section className="pt-24 pb-24 bg-[#f7f7f7] relative">
    {/* V-shaped cutout */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[250px] h-[50px] bg-white"
         style={{
           clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
         }}></div>

    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div className="relative">
          <div className="product-range-section">
            {/* Plus icons */}
            <div className="plus-icon top-1/4 left-1/4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="plus-icon top-2/3 right-1/4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="plus-icon bottom-1/4 left-1/3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>

            {/* Preview box */}
            <div className="preview-box">
              <div className="flex justify-center items-center space-x-2 mb-2">
                <span className="text-sm font-semibold">Edit</span>
                <span className="text-sm font-semibold text-green-500">Preview</span>
              </div>
              <img src={TShirt} alt="T-shirt Preview" className="w-32 h-32 object-cover rounded" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 md:pl-12">
        <h2 className="text-3xl font-bold mb-4">
          Easily add your design to a wide range of products
        </h2>
        <p className="text-gray-600 mb-6">
          With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
        </p>
        <a href="#" className="text-green-500 font-semibold flex items-center hover:underline">
          All products <ChevronRight className="ml-1 w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
  );
}