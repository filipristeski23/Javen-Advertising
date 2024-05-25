import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import AboutMe from "./components/AboutMe";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <FirstSection />
      <AboutMe />
      <ServicesSection />
    </div>
  );
}

export default App;
