import FirstSection from "../components/FirstSection.jsx";
import AboutMe from "../components/AboutMe.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import ClientsSection from "../components/ClientsSection.jsx";
import OtherAboutMe from "../components/OtherAboutMe.jsx";

function HomePage() {
  return (
    <div>
      <FirstSection />
      <AboutMe />
      <ServicesSection />
      <ClientsSection />
      <OtherAboutMe />
    </div>
  );
}

export default HomePage;
