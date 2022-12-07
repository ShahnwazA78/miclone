import React from 'react'
import "../styles/videos.css"
import VideoCard from "./VideoCard.jsx"

const Videos = ({videos}) => {
  return (
    <div className='videos-main'>
        {videos.map((item,idx)=>(
            <VideoCard key={item.name}
            image={item.image}
            name={item.name} />

        ))}
     
    </div>
  )
}

export default Videos
