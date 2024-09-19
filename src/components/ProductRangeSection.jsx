import BgCloth from '../assets/clothes-CMPWJ6JG.webp'
import Shape from '../assets/clothes-bottom-53OO5ML3.svg'
import { ChevronRight } from 'lucide-react';

export default function ProductRangeSection() {
  return (
    <section className="py-16 bg-[#f7f7f7]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="relative">
            <div className="relative z-10 p-8">
              <div
                className='relative w-full h-full rounded-lg product-range-section'

              >

              </div>

              {/* Plus icons */}
              <div className="absolute top-1/4 left-1/4 bg-white p-2 rounded-full shadow-md" style={{ zIndex: 2 }}>
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="absolute top-2/3 right-1/4 bg-white p-2 rounded-full shadow-md" style={{ zIndex: 2 }}>
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="absolute bottom-1/4 left-1/3 bg-white p-2 rounded-full shadow-md" style={{ zIndex: 2 }}>
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>

              {/* Preview box */}
              <div className="absolute bottom-16 right-16 bg-white rounded-lg shadow-lg p-2" style={{ zIndex: 2 }}>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-semibold">Edit</span>
                  <span className="text-sm font-semibold text-green-500">Preview</span>
                </div>
                <img src="/api/placeholder/150/150?text=T-shirt+Preview" alt="T-shirt Preview" className="w-32 h-32 object-cover rounded" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
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
  )
}
