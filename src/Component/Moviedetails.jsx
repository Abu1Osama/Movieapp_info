import { border } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Trailer from "./Trailer";
import "./moviedetail.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Moviedetails() {
  const { id } = useParams();
  const [key, setKey] = useState([]);
  const [activeTab, setActiveTab] = useState('All');
  const [movieData, setMovieData] = useState(null);
  
  async function fetchMovieDetails() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=7e47368dc262a55c9d2e8fbf9af6cfac&language=en-US`
      );
      const data = await res.json();
      setMovieData(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  }

  async function fetchVideos() {
    try {
      let res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=7e47368dc262a55c9d2e8fbf9af6cfac&language=en-US`
      );
      let data = await res.json();
      setKey(data.results);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  }

  useEffect(() => {
    if (id) {
      fetchMovieDetails();
      fetchVideos();
    }
  }, [id]);

  if (!movieData) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px'
      }}>
        Loading...
      </div>
    );
  }

  const { title, poster_path, release_date, vote_average, overview } = movieData;
  const posterUrl = "https://image.tmdb.org/t/p/w500/" + poster_path;

  return (
    <div>
      {/* <div
        style={{
          display: "flex",
          margin: "auto",
          gap: "10px",
          border: "10px solid",
        }}
      >
        <div style={{ width: "75%" }}>
          <img
            style={{ width: "100%", height: "550px", objectFit: "fill" }}
            src={poster_path}
            alt=""
          />
        </div>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            gap:"20px",
            fontSize:"20px",
            background:"linear-gradient(to right, rgb(104 165 152) 0%, rgb(125 202 172) 51%, rgb(81 206 160) 100%)"
            
           
          }}
        >
          <h1 style={{ color: "red" }}>{title}</h1>
          <b>Release on:- { release_date}</b>
          <b>Rating:- {vote_average}</b>
          <span><h4>Overview:-</h4> <i style={{fontSize:"25px"}}>{overview}</i></span>
         

        </div>
      </div> */}

      <div style={{ marginBottom:"20px" }}>
        <Card className="details_div" >
          <div className="omg_div" style={{ width: "100%" }}>
            <Card.Img style={{width:"100%", height:'500px',objectFit:'contain',margin:"auto" }} src={posterUrl} />
          </div>
          <div >

            <Card.Body className="align_text">
            <button className="mainbtn ">
              <Card.Title> <button className="ttb">{title}</button></Card.Title>
              <Card.Text> <button className="dec"><span className="sp">Release on:-</span>{release_date}</button></Card.Text>
              <Card.Text><button className="dec"><span className="sp">Rating:-</span>{release_date}</button></Card.Text>
              <Card.Text> <button className="dec2">{overview}</button></Card.Text>
            </button>
            </Card.Body>
          </div>
        </Card>
      </div>
      <div className="frame">
        {key.length > 0 && (
          <>
            <div style={{
              textAlign: 'center',
              marginBottom: '32px',
              marginTop: '40px'
            }}>
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '12px'
              }}>
                Videos & Media
              </h2>
              <p style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '16px'
              }}>
                Watch trailers, teasers, clips, and behind-the-scenes content
              </p>
            </div>

            {/* Tabs */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '40px',
              padding: '0 20px'
            }}>
              {['All', 'Trailer', 'Teaser', 'Clip', 'Featurette', 'Behind the Scenes', 'Other'].map((tab) => {
                const count = tab === 'All' 
                  ? key.length 
                  : tab === 'Other'
                  ? key.filter(item => !['Trailer', 'Teaser', 'Clip', 'Featurette', 'Behind the Scenes'].includes(item.type)).length
                  : key.filter(item => item.type === tab).length;
                
                if (count === 0 && tab !== 'All') return null;
                
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '12px 24px',
                      borderRadius: '25px',
                      border: activeTab === tab ? '2px solid #667eea' : '2px solid rgba(255, 255, 255, 0.2)',
                      background: activeTab === tab 
                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                        : 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '15px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)',
                      boxShadow: activeTab === tab ? '0 4px 16px rgba(102, 126, 234, 0.4)' : 'none'
                    }}
                  >
                    {tab === 'Trailer' ? '🎬' :
                     tab === 'Teaser' ? '👀' :
                     tab === 'Clip' ? '🎞️' :
                     tab === 'Featurette' ? '🎥' :
                     tab === 'Behind the Scenes' ? '🎭' :
                     tab === 'Other' ? '📹' : '🎪'} {tab} ({count})
                  </button>
                );
              })}
            </div>

            {/* Video Content */}
            <div style={{
              width: '100%',
              maxWidth: '900px',
              margin: '0 auto',
              padding: '0 20px',
              boxSizing: 'border-box'
            }}>
              {(() => {
                let filteredVideos;
                if (activeTab === 'All') {
                  filteredVideos = key;
                } else if (activeTab === 'Other') {
                  filteredVideos = key.filter(item => !['Trailer', 'Teaser', 'Clip', 'Featurette', 'Behind the Scenes'].includes(item.type));
                } else {
                  filteredVideos = key.filter(item => item.type === activeTab);
                }

                return filteredVideos.map((item) => (
                  <Trailer key={item.id} item={item} />
                ));
              })()}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Moviedetails;
