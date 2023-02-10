import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Moviedetails from "./Component/Moviedetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moviedetails" element={<Moviedetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
