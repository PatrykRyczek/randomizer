import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Nav/Navbar";
import Home from "./Pages/Home";
import Pesel from "./Pages/Pesel";
import Birth from "./Pages/Birth";
import Phone from "./Pages/Phone";
import Int from "./Pages/Int";
import Dec from "./Pages/Dec";
import Custom from "./Pages/Custom";
import Coin from "./Pages/Coin";
import Dice from "./Pages/Dice";
import Drink from "./Pages/Drink";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pesel" element={<Pesel />} />
          <Route path="/birth" element={<Birth />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/int" element={<Int />} />
          <Route path="/dec" element={<Dec />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/coin" element={<Coin />} />
          <Route path="/dice" element={<Dice />} />
          <Route path="/drink" element={<Drink />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
