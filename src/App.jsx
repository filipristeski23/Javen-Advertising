import GlobalStyles from "./styles/GlobalStyles";
import OtherServicesSection from "./components/OtherServicesSection";
import InformationalSection from "./components/InformationalSection";
import QuoteSection from "./components/QuoteSection";
import PicturesSection from "./components/PicturesSection";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <GlobalStyles />
      <OtherServicesSection />
      <InformationalSection />
      <QuoteSection />
      <PicturesSection />
      <ContactForm />
    </div>
  );
}

export default App;
