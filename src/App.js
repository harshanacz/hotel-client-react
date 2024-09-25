import Footer from "./components/Footer";
import GlobalNavbar from "./components/GlobalNavbar";
import FAQSection from "./components/home screen/FAQSection";
import FullFeaturesSection from "./components/home screen/FullFeaturesSection";
import HeroSection from "./components/home screen/HeroSection";
import OfferSection from "./components/home screen/OffersSection";
import QuickAccessSection from "./components/home screen/QuickAccessSection";
import ReviewSection from "./components/home screen/ReviewSection";


function App() {
  return (
    <div>
      <GlobalNavbar/>
      <HeroSection />
      <QuickAccessSection />
      <FullFeaturesSection />
      <FAQSection/>
      <OfferSection/>
      <ReviewSection/>
      <Footer/>
    </div>
  );
}

export default App;
