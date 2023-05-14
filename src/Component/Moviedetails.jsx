import { border } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Trailer from "./Trailer";
import "./moviedetail.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Moviedetails(props) {
  const [key, setKey] = useState([]);
  let { title, poster_path, release_date, vote_average, overview } = props.obj;
  poster_path = "https://image.tmdb.org/t/p/w500/" + poster_path;
  async function trailer() {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/${props.obj.id}/videos?api_key=7e47368dc262a55c9d2e8fbf9af6cfac&language=en-US`
    );
    let data = await res.json();

    // console.log(data.results)
    // console.log(props.id)
    setKey(data.results);
    // console.log(data.results);
  }
  useEffect(() => {
    trailer();
  }, []);

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
            <Card.Img style={{width:"100%", height:'500px',objectFit:'contain',margin:"auto" }} src={poster_path} />
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
        {key.map((item) => (
          <Trailer key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Moviedetails;
