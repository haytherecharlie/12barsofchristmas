import React, { useState, useEffect } from "react"
import db from "../services/firebase"
import styled from "styled-components"
import Modal from "../components/Modal"

const Gallery = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: `30px 0`,
  marginTop: -30,
  marginBottom: 200,
})

const Title = styled("span")({
  fontSize: `20px`,
  fontWeight: 700,
  color: `#27b34d`,
  paddingLeft: 20,
  width: `100vw`,
  textTransform: "uppercase",
})

const GalleryPhotos = styled("div")({
  width: "100vw",
  maxWidth: "800px",
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  padding: "10px",
})

const ImageBox = styled("div")({
  width: `20vw`,
  height: `20vw`,
  border: "1px solid #f8f8f8",
  borderRadius: `5px`,
  boxShadow: "4px 4px 5px rgba(0,0,0,0.1)",
  padding: `5px`,
  display: "flex",
  alignItems: "stretch",
  justifyContent: "stretch",
  margin: 5,
  background: "#fff",
})

const MapButton = styled("a")({
  background: "#CE1C00",
  padding: `10px 70px`,
  border: `2px solid #27b34d`,
  borderRadius: `20px`,
  color: `#fff`,
  textDecoration: "none",
  marginBottom: 20,
})

export default function ImageGallery({ setLoading }) {
  const [thumbs, setThumbs] = useState([])
  const [selected, setSelected] = useState(null)
  const [placeholders, setPlaceholders] = useState([])

  const listenForNewPhotos = async snap => {
    const thumbArray = []
    snap.forEach(thumb => thumbArray.push(thumb.data()))
    setPlaceholders(Array(20 - thumbArray.length).fill(''))
    setThumbs(thumbArray)
    setLoading(false)
  }

  useEffect(() => {
    const unsubscribe = db.collection("thumbnails").onSnapshot(listenForNewPhotos)
    setPlaceholders(Array(20 - thumbs.length).fill(''))
    return () => unsubscribe()
  }, [])

  return (
    <Gallery>
      {/* <MapButton href="/map">View Map</MapButton> */}
      <Title>Shared Photo Gallery</Title>
      <GalleryPhotos>
        {thumbs.map((thumb, i) => (
          <ImageBox key={`${thumb.timestamp}${i}`} onClick={() => setSelected(thumb.timestamp)}>
            <div
              style={{
                flex: 1,
                display: 'flex',
                borderRadius: 5,
                overflow: "hidden",
                backgroundImage: `url("${thumb.data}")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </ImageBox>
        ))}
        {placeholders.map(() => (
          <div
            style={{
              width: `20vw`,
              height: `20vw`,
              border: "1px dotted #CCCCCC",
              borderRadius: `5px`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: 5,
              background: "#fff",
            }}
          />
        ))}
      </GalleryPhotos>
      <Modal selected={selected} setSelected={setSelected} />
    </Gallery>
  )
}
