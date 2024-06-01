import { Outlet, useLocation } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.js";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <GlobalStyles />
      <Outlet />
    </div>
  );
}

export default App;
