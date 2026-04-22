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
        padding: "40px 20px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "48px",
          padding: "32px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "800",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "16px",
            letterSpacing: "1px",
          }}
        >
          Popular Movies
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "rgba(255, 255, 255, 0.7)",
            fontWeight: "400",
          }}
        >
          Discover the latest and greatest films
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "32px",
          marginBottom: "40px",
          gridAutoRows: "1fr",
        }}
      >
        {movie.map((item) => (
          <Trending
            key={item.id}
            obj={item}
            setTrailerId={props.setTrailerId}
          />
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button className="pagi" onClick={nextPage}>
          Load More - Page {page + 1}
        </button>
      </div>
    </div>
  );
}

export default Home;
