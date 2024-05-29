import GlobalStyles from "./styles/GlobalStyles";
import OtherServicesSection from "./components/OtherServicesSection";
import InformationalSection from "./components/InformationalSection";
import QuoteSection from "./components/QuoteSection";
import PicturesSection from "./components/PicturesSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <GlobalStyles />
      <OtherServicesSection />
      <InformationalSection />
      <QuoteSection />
      <PicturesSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
