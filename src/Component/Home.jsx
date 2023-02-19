import React, { useEffect, useState } from "react";
import Trending from "./Trnding";

function Home(props ) {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
  };

  async function trendingMovies() {
    let res = await fetch(
      ` https://api.themoviedb.org/3/movie/popular?api_key=7e47368dc262a55c9d2e8fbf9af6cfac&language=en-US&page=${page}`
    );
    let data = await res.json();

    setMovie(data.results);
  }
  trendingMovies();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,300px)",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {movie.map((item) => (
        <Trending
          key={item.id}
          obj={item}
          setTrailerId={props.setTrailerId}
          // fortrailer={props.fortrailer}
          // title, imge, desc ,release_date
        />
      ))}
      <a
        style={{ textDecoration: "none", fontSize: "20px", margin: "25px" }}
        href="#"
        onClick={nextPage}
      >
        {" "}
        Page {page + 1}
      </a>
    </div>
  );
}

export default Home;
