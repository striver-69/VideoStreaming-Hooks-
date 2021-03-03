import React from 'react'

export default function VideoDetail({video}) {
  return (
    <div>
      {video.snippet.title}
    </div>
  )
}
