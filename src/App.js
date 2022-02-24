import "./App.css";
import Navbar from "./components/navbar";
import MyLogo from "./img/logo2.png";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <div class="pic">
        <img src={MyLogo} alt="My Logo" />
      </div> */}
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
