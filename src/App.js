import logo from "./logo.svg";
import "./App.css";
import Navbar1 from "./Component/Navbar1";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Moviedetails from "./Component/Moviedetails";
import { useState } from "react";

function App() {
  const [trailerID,setTrailerId]=useState({
    "adult": false,
    "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    "genre_ids": [
        28,
        12,
        878
    ],
    "id": 505642,
    "original_language": "en",
    "original_title": "Black Panther: Wakanda Forever",
    "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "popularity": 4782.887,
    "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    "release_date": "2022-11-09",
    "title": "Black Panther: Wakanda Forever",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 3245
})
  return (
    <div className="App">
      <Navbar1 />
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setTrailerId={setTrailerId} />} />
          <Route path="/moviedetails" element={<Moviedetails obj={trailerID} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
