import logo from "./logo.svg";
import "./App.css";
import Navbar1 from "./Component/Navbar1";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Moviedetails from "./Component/Moviedetails";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moviedetails/:id" element={<Moviedetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
