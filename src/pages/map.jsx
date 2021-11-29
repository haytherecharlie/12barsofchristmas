import React from "react"
import map from "../assets/images/map.jpg"
import styled from "styled-components"

const Wrapper = styled("div")({
  height: `100vh`,
  width: `100vw`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `center`,
})

const BackButton = styled("a")({
  position: "fixed",
  top: 0,
  left: 0,
  color: `#27b34d`,
  fontSize: `25px`,
  padding: 10,
  textDecoration: "none",
})

const Map = styled("img")(({ wide }) => (wide ? { height: `100vh` } : { width: `100vw` }))

const NotFoundPage = () => {
  const wide = typeof window !== 'undefined' ? window.innerWidth > window.innerHeight: 0
  return (
    <Wrapper>
      <BackButton href="/">&lsaquo; Go Back</BackButton>
      <Map src={map} alt="map of route" wide={wide} />
    </Wrapper>
  )
}

export default NotFoundPage
