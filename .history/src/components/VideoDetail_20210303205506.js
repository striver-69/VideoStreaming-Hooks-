import React from 'react'

export default function VideoDetail({video}) {
  if(!video){
    return <div>Loading..</div>
  }
  return (
    <div>
      <div className="ui segment">
        {video.snippet.title}
      </div>
    </div>
  )
}
