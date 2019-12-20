import React, { useEffect, useState } from "react"
import styled from "styled-components"
import db from "../services/firebase"

const Wrapper = styled("div")({
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
})

const Label = styled("label")({
  fontSize: 20,
})

const Input = styled("input")({
  width: `90%`,
  padding: `20px`,
  fontSize: `30px`,
  lineHeight: `30px`,
  border: `5px solid #b31701`,
  marginBottom: `20px`,
})

const Submit = styled("button")({
  width: `90%`,
  padding: `20px`,
  fontSize: `30px`,
  lineHeight: `30px`,
  background: "red",
  color: "#fff",
})

const NextBar = () => {
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

  const handleSubmit = () => {
    db.collection("information")
      .doc("location")
      .set({
        current,
        next,
      })
  }

  return (
    <Wrapper>
      <Label>Current Bar:</Label>
      <Input onChange={e => setCurrent(e.target.value)} placeholder={current} />
      <Label>Next Bar:</Label>
      <Input
        onChange={e => setNext(e.target.value)}
        onFocus={e => {
          e.target.value = ""
          setCurrent(next)
        }}
        placeholder={next}
      />
      <Submit onClick={handleSubmit}>Submit</Submit>
    </Wrapper>
  )
}

export default NextBar
