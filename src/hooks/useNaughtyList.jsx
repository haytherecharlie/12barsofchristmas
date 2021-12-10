import { useEffect, useState, useRef } from "react"
import db from "../api/firebase"

export default function useNaughtyList() {
  const inputRef = useRef()
  const [list, setList] = useState([])

  async function addAttendee() {
    const name = inputRef.current.value
    if (name !== "") {
      inputRef.current.value = ""
      const ref = db.collection("attendees").doc()
      return await ref.set({ name })
    }
    
  }

  async function listenToAttendees(snap) {
    const snapList = []
    snap.forEach(data => snapList.push({ id: data.id, ...data.data() }))
    setList(snapList.sort(() => .5 - Math.random()))
  }

  useEffect(() => {
    const unsubscribe = db.collection("attendees").onSnapshot(listenToAttendees)
    return () => unsubscribe()
  }, [])

  return [list, addAttendee, inputRef]
}
