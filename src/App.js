import GlobalNavbar from "./components/GlobalNavbar";
import FullFeaturesSection from "./components/home screen/FullFeaturesSection";
import HeroSection from "./components/home screen/HeroSection";
import QuickAccessSection from "./components/home screen/QuickAccessSection";


function App() {
  return (
    <div>
      <GlobalNavbar/>
      <HeroSection />
      <QuickAccessSection />
      <FullFeaturesSection />
    </div>
  );
}

export default App;
