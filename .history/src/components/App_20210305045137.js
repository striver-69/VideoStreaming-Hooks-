import React, { useState,useEffect } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App=()=>{
  
  const [selectedVideo,setSelectedVideo]=useState(null)

  // setSelectedVideo(response.data.items[0])

  

  const onVideoSelect=(video)=>{
    setSelectedVideo(video)
  }

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo}/>
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
