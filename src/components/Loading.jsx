import React from "react"
import styled from "styled-components"
import wreath from "../assets/images/wreath.png"

const Wrapper = styled("div")({
  display: p => (p.show ? "flex" : "none"),
  zIndex: 99999,
  background: "#f8f8f8",
  position: `absolute`,
  top: 0,
  bottom: 0,
  height: `100vh`,
  width: `100vw`,
  alignItems: "center",
  justifyContent: "center",
})

const Wreath = styled("img")({
  marginTop: "-50px",
  height: `100px`,
  width: `100px`,
  transform: `scale(1)`,
  animation: `pulse 1s infinite`,
  [`@keyframes pulse`]: {
    [`0%`]: {
      transform: `scale(0.8)`,
    },
    [`70%`]: {
      transform: `scale(1)`,
    },
    [`100%`]: {
      transform: `scale(0.8)`,
    },
  },
})

const Loading = ({ loading }) => {
  return (
    <Wrapper show={loading}>
      <Wreath src={wreath} alt="loading" />
    </Wrapper>
  )
}

export default Loading
