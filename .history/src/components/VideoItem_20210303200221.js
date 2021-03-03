import React from 'react'

export default function VideoItem({video}) {
  return (
    <div className="item">
      <img src={video.snippet.thumbnails.medium.url}/>
      {video.snippet.title}
    </div>
  )
}
