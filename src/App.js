import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
  );
}

export default App;
