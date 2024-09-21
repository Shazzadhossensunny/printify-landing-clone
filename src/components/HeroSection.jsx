import TShirt from '../assets/img_5.png';
import Person from '../assets/person.svg';
import Shape2 from '../assets/background-IAMAETLT.svg';

const HeroSection = () => (
  <section className="relative overflow-hidden py-16 lg:py-24">
    <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
      {/* Left Section - Text Content */}
      <div className="lg:w-1/2 z-10 flex flex-col items-start mb-8 lg:mb-0 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Create and sell custom products
        </h1>
        <ul className="space-y-2 mb-8">
          <li className="flex items-center justify-center lg:justify-start text-gray-600">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            100% Free to use
          </li>
          <li className="flex items-center justify-center lg:justify-start text-gray-600">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            900+ High-Quality Products
          </li>
          <li className="flex items-center justify-center lg:justify-start text-gray-600">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Largest global print network
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
          <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors duration-300">
            Start for free
          </button>
          <button className="border border-gray-300 text-gray-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            How it works?
          </button>
        </div>
        <p className="mt-4 text-sm text-green-500">Trusted by over 8M sellers around the world</p>
      </div>

      {/* Right Section - Image Content */}
      <div className="lg:w-1/2 relative flex justify-center items-center z-10 my-12 lg:my-24">
        <div className="relative flex justify-center items-center">
          {/* T-shirt Image inside square box with shadow */}
          <div className="bg-white shadow-lg w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex items-center justify-center rounded-md">
            <img src={TShirt} alt="T-shirt" className="max-w-full max-h-full object-contain p-4 lg:p-12" />
          </div>

          {/* Person Image - Absolute inside square box with shadow */}
          <div className="absolute -right-12 -bottom-12 transform w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 shadow-lg bg-white rounded-md">
            <img src={Person} alt="Person pointing" className="max-w-full max-h-full object-contain" />
          </div>
        </div>

        {/* Background Shape */}
        <img src={Shape2} alt="Background Shape" className="absolute top-1/2 transform -translate-y-1/2 -z-50" />
      </div>
    </div>
  </section>
);

export default HeroSection;
