import React, { useState } from "react"
import { Timeline, Bookmark, Marker } from "react-vertical-timeline"

const ImageUpload = () => {
  const [progress, setProgress] = useState(50)

  return (
    <Timeline height={300} progress={progress} onSelect={setProgress}>
      <Bookmark progress={20} onSelect={setProgress}>
        Hi there 20%
      </Bookmark>
      <Marker progress={33} />
      <Bookmark progress={55} onSelect={setProgress}>
        Hi there 55%
      </Bookmark>
      <Bookmark progress={75} onSelect={setProgress}>
        Hi there 75%
      </Bookmark>
    </Timeline>
  )
}

export default ImageUpload
