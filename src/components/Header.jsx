import React, { useState, useEffect } from "react"
import styled from "styled-components"
import db from "../services/firebase"
import Countdown from "react-countdown-now"

const Wrapper = styled("div")({
  width: "100vw",
  height: "74px",
  position: "fixed",
  borderTop: `5px solid #da1f00`,
  background: "#b31701",
  top: 0,
  left: 0,
  zIndex: 9999,
  padding: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const Title = styled("span")({
  fontWeight: 100,
  fontSize: 14,
  color: `#FFF`,
})

const Stack = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
})

const Header = () => {
  const [current, setCurrent] = useState("")
  const [next, setNext] = useState("")

  const listenForChange = async snap => {
    const data = await snap.data()
    setCurrent(data.current)
    setNext(data.next)
  }

  useEffect(() => {
    const unsubscribe = db
      .collection("information")
      .doc("location")
      .onSnapshot(listenForChange)
    return () => unsubscribe()
  }, [])

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <Stack>
          <Title>Current Bar: {current}</Title>
          <Title>Next Bar: {next}</Title>
        </Stack>
      )
    } else {
      return (
        <Stack>
          <Title>{`Event Begins in: ${days} Days ${hours} hours \n ${minutes} minutes`}</Title>
          <Title>First Bar: {current}</Title>
        </Stack>
      )
    }
  }

  const date = "2019-12-21T20:00:00"
  return (
    <Wrapper>
      <Countdown date={date} renderer={renderer} />
    </Wrapper>
  )
}

export default Header
