import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import IntegrationSection from "./components/IntegrationSection";
import PricingSection from "./components/PricingSection";
import ProductRangeSection from "./components/ProductRangeSection";
import ProductShowcase from "./components/ProductShowcase";
import TestimonialSection from "./components/TestimonialSection";


function App() {
  return (
    <>
      <Header />
    <main>
      <HeroSection />
      <FeatureSection />
      <ProductRangeSection />
      <ProductShowcase />
      <IntegrationSection />
      <TestimonialSection />
      <PricingSection />
    </main>
    <Footer />
    </>
  );
}

export default App;
