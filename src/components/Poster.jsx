import React from "react"
import styled from "styled-components"
import poster from "../assets/images/poster.png"

const Wrapper = styled("div")({
  width: `100%`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
})

const Image = styled("img")({
  width: `90%`,
  maxWidth: `300px`,
})

const Title = styled("span")({
  fontWeight: 100,
  marginTop: '-40px',
  marginBottom: `40px`,
  color: `#27b34d`
})

const Poster = () => {
  return (
    <Wrapper>
      <Image src={poster} alt="12 bars" />
      <Title>'Tis the season for drinkin'</Title>
    </Wrapper>
  )
}

export default Poster
