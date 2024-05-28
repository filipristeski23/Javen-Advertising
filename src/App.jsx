import GlobalStyles from "./styles/GlobalStyles";
import OtherServicesSection from "./components/OtherServicesSection";
import InformationalSection from "./components/InformationalSection";
import QuoteSection from "./components/QuoteSection";
import PicturesSection from "./components/PicturesSection";

function App() {
  return (
    <div>
      <GlobalStyles />
      <OtherServicesSection />
      <InformationalSection />
      <QuoteSection />
      <PicturesSection />
    </div>
  );
}

export default App;
