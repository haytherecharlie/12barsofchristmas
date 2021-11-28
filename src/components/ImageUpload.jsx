import React, { useState, useRef } from "react"
import styled from "styled-components"
import db from "../services/firebase"
import SendIcon from "react-ionicons/lib/MdCheckmark"
import CancelIcon from "react-ionicons/lib/MdClose"
import CameraIcon from "react-ionicons/lib/IosCameraOutline"
import imagenation from "imagenation"

const Wrapper = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
})

// SELECT
const SelectImageInput = styled("input")({
  display: "none",
})

const SelectImageLabel = styled("label")({
  zIndex: 9999,
  background: `#27b34d`,
  padding: "9px 14px",
  boxShadow: '0px 0px 5px rgba(0,0,0,0.6)',
  border: '5px solid #fff',
  position: "fixed",
  bottom: 20,
  right: 20,
  borderRadius: `50%`,
  display: p => (p.image ? "none" : "block"),
})

const UploadedImageWrapper = styled("div")({
  zIndex: 1000,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
})

const UploadedImage = styled("img")({
  width: "90vw",
  maxWidth: "500px",
})

const ConfirmWrapper = styled("div")({
  position: "absolute",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
})

const SendButton = styled("button")({
  background: "green",
  padding: "25px",
  margin: "25px",
  border: "none",
  borderRadius: "50%",
})

const CancelButton = styled("button")({
  background: "red",
  padding: "25px",
  margin: "25px",
  border: "none",
  borderRadius: "50%",
})

const ImageUpload = () => {
  const imageSizeRef = useRef(null)
  const [image, setImage] = useState(null)
  const [thumbnail, setThumbnail] = useState(null)

  const orientImage = async ({ target }) => {
    const uploadedPhoto = target.files[0]
    setImage(await imagenation(uploadedPhoto, 400))
    setThumbnail(await imagenation(uploadedPhoto, 100))
  }

  const handleCancel = async () => {
    setImage(null)
    setThumbnail(null)
  }

  const handleSubmit = async () => {
    const { width, height } = imageSizeRef.current
    const time = `${new Date().getTime()}`
    db.collection("photos")
      .doc(`${time}`)
      .set({ timestamp: time, data: image, width, height })
    db.collection("thumbnails")
      .doc(`${time}`)
      .set({ timestamp: time, data: thumbnail })
    setImage(null)
  }

  return (
    <Wrapper>
      <SelectImageLabel image={image}>
        <SelectImageInput type="file" onChange={orientImage} accept="image/*" capture="camera" />
        <CameraIcon color="#fff" fontSize="50px" />
      </SelectImageLabel>

      {image && (
        <UploadedImageWrapper>
          <UploadedImage ref={imageSizeRef} src={image} alt="use your imagenation" />
          <ConfirmWrapper>
            <SendButton onClick={handleSubmit}>
              <SendIcon color="#FFF" fontSize="40px" />
            </SendButton>
            <CancelButton onClick={handleCancel}>
              <CancelIcon color="#FFF" fontSize="40px" />
            </CancelButton>
          </ConfirmWrapper>
        </UploadedImageWrapper>
      )}
    </Wrapper>
  )
}

export default ImageUpload
