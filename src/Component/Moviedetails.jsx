import { border } from '@chakra-ui/react'
import React from 'react'

function Moviedetails() {
    const src="https://www.youtube.com/shorts/bUvoBfAPq2Q"
  return (
    <div style={{display:"flex" ,width:"60%",margin:"auto",gap:"20px" ,border:"10px solid"}}>
       <div  style={{width:"35%"}}>
        <img style={{width:"100%" ,height:"550px", objectFit:"fill"}} src={"https://images.pexels.com/photos/1406764/pexels-photo-1406764.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="" />

       </div>
       <div   style={{width:"55%",textAlign:"center",display:"flex",flexDirection:'column',justifyContent:"space-evenly"}}>
        <h1 style={{ color:"teal"}}>Fight Club (1999)</h1>
      <img  src="https://dl-file.cyberlink.com/web/upload-file/learning-center/enu/2022/10/Thumbnail_20221011024829917.jpg" alt="" />
    
        <p>"Thirteen year old Sam Cleary suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 25 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin."</p>
       </div>
    </div>
  )
}

export default Moviedetails