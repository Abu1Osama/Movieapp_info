import React from 'react'

function Trailer(props) {
    const {key,type}=props.item
  let videosrc=`https://www.youtube.com/embed/${key}`
// console.log(props.item)
// type
// : 
// "Trailer"
  return (
    <div style={{alignContent:"center" }}>
    {type==="Trailer"?<iframe width="600px" height="500px" src={videosrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>:""}
    </div>
    
  )
}

export default Trailer