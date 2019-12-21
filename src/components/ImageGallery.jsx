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
  padding: `10px 0`,
  marginTop: -30,
  marginBottom: 200,
})

const Title = styled("span")({
  fontSize: `30px`,
  fontWeight: 700,
  color: `#27b34d`,
})

const GalleryPhotos = styled("div")({
  width: "100%",
  maxWidth: "800px",
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  padding: "10px",
})

const ImageBox = styled("div")({
  flex: 1,
  maxWidth: `120px`,
  border: "1px solid #f8f8f8",
  borderRadius: `5px`,
  boxShadow: "4px 4px 5px rgba(0,0,0,0.1)",
  padding: `5px`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 5,
  background: "#fff",
})

const MapButton = styled("a")({
  background: "#CE1C00",
  padding: `10px 70px`,
  border: `2px solid #27b34d`,
  borderRadius: `20px`,
  color: `#fff`,
  textDecoration: 'none',
  marginBottom: 20
})

const ImageGallery = ({ setLoading }) => {
  const [thumbs, setThumbs] = useState([])
  const [selected, setSelected] = useState(null)

  const listenForNewPhotos = async snap => {
    const thumbArray = []
    snap.forEach(thumb => thumbArray.push(thumb.data()))
    setThumbs(thumbArray)
    setLoading(false)
  }

  useEffect(() => {
    const unsubscribe = db.collection("thumbnails").onSnapshot(listenForNewPhotos)
    return () => unsubscribe()
  }, [])

  return (
    <Gallery>
      <MapButton href="/map">View Map</MapButton>
      <Title>Shared Photos</Title>
      <GalleryPhotos>
        {thumbs.map((thumb, i) => (
          <ImageBox key={`${thumb.timestamp}${i}`} onClick={() => setSelected(thumb.timestamp)}>
            <img width={100} src={thumb.data} alt="xmas cheer" />
          </ImageBox>
        ))}
      </GalleryPhotos>
      <Modal selected={selected} setSelected={setSelected} />
    </Gallery>
  )
}

export default ImageGallery
