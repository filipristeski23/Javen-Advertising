import AboutUsTopSection from "../components/AboutUsTopSection.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";
import OtherServicesSection from "../components/OtherServicesSection.jsx";
import PicturesSection from "../components/PicturesSection.jsx";
import QuoteSection from "../components/QuoteSection.jsx";
import InformationalSection from "../components/InformationalSection.jsx";

function AboutUsPage() {
  return (
    <div>
      <AboutUsTopSection />
      <OtherServicesSection />
      <InformationalSection />
      <QuoteSection />
      <PicturesSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default AboutUsPage;
