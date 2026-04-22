import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Moviedetails from "./Moviedetails"
import "./Trending.scss"
export default function Trending(props) {
   let { title, poster_path, release_date, vote_average, id } = props.obj
   poster_path="https://image.tmdb.org/t/p/w500/"+poster_path
   const [detail,setDetail]=useState("none")
 const details=()=>{
setDetail("block")
 }
 const detailsleave=()=>{
    setDetail("none")
     }
   
return (
<Link to={`/moviedetails/${id}`} style={{ textDecoration: 'none' }}>
<div onMouseLeave={detailsleave} onMouseEnter={details} className="trending_page">
    <img width={"100%"} style={{objectFit:"cover", height:"420px", display: "block"}} src={poster_path} alt={title} />
    <h3 className="heading">{title}</h3>
    <div style={{display:detail}} >
    <h3>{title}</h3>
    <p>⭐ Rating: {vote_average}/10</p>
    <p>📅 Release: {release_date}</p>
    </div>
</div>
</Link>
)

 
}
