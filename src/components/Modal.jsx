import React, { useState, useEffect } from "react"
import styled from "styled-components"
import db from "../services/firebase"

const Wrapper = styled("div")({
  display: p => (p.show ? "flex" : "none"),
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  height: `100vh`,
  width: `100vw`,
  background: `rgb(0,0,0,0.4)`,
  top: 0,
  left: 0,
  zIndex: 9999999,
})

const ModalBody = styled("div")({
  maxWidth: `90%`,
  maxHeight: `90%`,
  background: `#FFF`,
  borderRadius: 20,
  padding: 20,
})

const Modal = ({ selected, setSelected }) => {
  const [image, setImage] = useState(undefined)

  const getPhoto = async () => {
    const photo = await db
      .collection("photos")
      .doc(`${selected}`)
      .get()
    setImage(photo.data())
  }

  useEffect(() => {
    if (selected) {
      getPhoto()
    }
  }, [selected])

  return (
    <Wrapper
      show={!!selected}
      onClick={() => {
        setSelected(null)
        setImage(undefined)
      }}
    >
      <ModalBody>{image ? <img src={image.data} width='100%' alt="cool image" /> : <div>loading</div>}</ModalBody>
    </Wrapper>
  )
}

export default Modal
