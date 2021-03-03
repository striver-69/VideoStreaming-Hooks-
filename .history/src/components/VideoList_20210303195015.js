import React from 'react'
import VideoItem from './VideoItem'

export default function VideoList({videos}) {
  videos.map((video)=>{
    return <VideoItem/>
  })
  return (
    <div>
      {videos.length}
    </div>
  )
}
