import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <FirstSection />
      <AboutMe />
    </div>
  );
}

export default App;
