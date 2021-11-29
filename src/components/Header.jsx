import React, { useState, useEffect } from "react"
import styled from "styled-components"
import db from "../services/firebase"
import Countdown from "react-countdown-now"

export default function Header() {
  const [current, setCurrent] = useState("")
  const [next, setNext] = useState("")

  const listenForChange = async snap => {
    const data = await snap.data()
    setCurrent(data.current)
    setNext(data.next)
  }

  useEffect(() => {
    const unsubscribe = db.doc("information/location").onSnapshot(listenForChange)
    return () => unsubscribe()
  }, [])

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <S.Row>
          <S.Column>
            <img src="/images/logo.png" height="50px" width="50px" style={{marginRight: "10px"}} />
          </S.Column>
          <S.Column>
            <S.Text>Current Bar: {current}</S.Text>
            <S.Text>Next Bar: {next}</S.Text>
          </S.Column>
        </S.Row>
      )
    } else {
      return (
        <S.Column>
          <S.Text>{`Event Begins in: ${days} Days ${hours} hours \n ${minutes} minutes`}</S.Text>
          <S.Text>First Bar: {current}</S.Text>
        </S.Column>
      )
    }
  }

  const date = "2021-12-21T20:00:00"
  return (
    <S.Wrapper>
      <Countdown date={date} renderer={renderer} />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled("div")({
    width: "100vw",
    height: "74px",
    position: "fixed",
    borderTop: `5px solid #27b34d`,
    background: "#b31701",
    top: 0,
    left: 0,
    zIndex: 9999,
    padding: 10,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  }),
  Text: styled("span")({
    fontWeight: 100,
    fontSize: 14,
    color: `#FFF`,
    textTransform: 'uppercase'
  }),
  Column: styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  }),
  Row: styled("div")({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  }),
}
