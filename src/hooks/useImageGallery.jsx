import { useEffect, useState } from "react"
import { PLACEHOLDERS } from "../config/constants"
import db from "../api/firebase"

export default function useImageGallery(setLoading) {
  const [thumbs, setThumbs] = useState([])
  const [placeholders, setPlaceholders] = useState([])

  async function listenForNewPhotos(snap) {
    const thumbArray = []
    snap.forEach(thumb => thumbArray.push(thumb.data()))
    setPlaceholders(Array(PLACEHOLDERS - thumbArray.length).fill(""))
    setThumbs(thumbArray)
    setLoading(false)
  }

  useEffect(() => {
    const unsubscribe = db.collection("thumbnails").onSnapshot(listenForNewPhotos)
    setPlaceholders(Array(PLACEHOLDERS - thumbs.length).fill(""))
    return () => unsubscribe()
  }, [])

  return [thumbs, placeholders]
}
