import Profit from '../assets/higher-profits.svg'
import Robust from '../assets/robust-scaling.svg'
import Selection from '../assets/best-selection.svg'

const features = [
  { title: 'Higher Profits', image: Profit, description: 'We offer some of the lowest prices in the industry because print providers continuously compete to win your business.' },
  { title: 'Robust Scaling', image: Robust, description: 'Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.' },
  { title: 'Best Selection', image: Selection, description: 'With 900+ products and top quality brands, you can choose the best products for your business.' }
];

const FeatureSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="rounded-full w-28 h-28 flex items-center justify-center mx-auto mb-4">
              <img src={feature.image} alt={feature.title}/>
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureSection;
