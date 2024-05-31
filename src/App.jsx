import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.js";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Outlet />
    </div>
  );
}

export default App;
