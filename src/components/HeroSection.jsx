import TShirt from '../assets/img_5.png'

const HeroSection = () => (
    <section className="relative bg-gray-50 overflow-hidden">
    <div className="container mx-auto px-4 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Create and sell custom products
          </h1>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center text-gray-600">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              100% Free to use
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              900+ High-Quality Products
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Largest global print network
            </li>
          </ul>
          <div className="flex space-x-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors duration-300">
              Start for free
            </button>
            <button className="border border-gray-300 text-gray-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              How it works?
            </button>
          </div>
          <p className="mt-4 text-sm text-green-500">Trusted by over 8M sellers around the world</p>
        </div>
        <div className="lg:w-1/2 relative">
          <img src={TShirt} alt="T-shirt" className="rounded-lg shadow-lg" />
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-gray-200 rounded-full"></div>
          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
            <img src="/api/placeholder/200/400?text=Person" alt="Person pointing" className="h-full object-contain" />
          </div>

        </div>
      </div>
    </div>
    {/* <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100 -skew-x-12 transform origin-top-right"></div> */}
  </section>
);

export default HeroSection;
