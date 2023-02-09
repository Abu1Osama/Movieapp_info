import { useEffect, useState } from "react"
import "./Trending.scss"
export default function Trending(props) {
   let { title, poster_path, release_date,vote_average}=props.obj
   poster_path="https://image.tmdb.org/t/p/w500/"+poster_path
   const [detail,setDetail]=useState("none")
 const details=()=>{
setDetail("block")
 }
 const detailsleave=()=>{
    setDetail("none")
     }
   
return (

<div  onMouseLeave={detailsleave} onMouseEnter={details} className="trending_page">
    <img width={"100%"} style={{objectFit:"cover",height:"400px"}} src={poster_path} alt="" />
    <h3 className="heading">{title}</h3>
    <div style={{display:detail}} >
    <h3>{title}</h3>
    <p>Rating:-{vote_average}</p>
    <p> Release on:-{release_date}</p>
    </div>
</div>

)

 
}
