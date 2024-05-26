import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import AboutMe from "./components/AboutMe";
import ServicesSection from "./components/ServicesSection";
import ClientsSection from "./components/ClientsSection";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <FirstSection />
      <AboutMe />
      <ServicesSection />
      <ClientsSection />
    </div>
  );
}

export default App;
