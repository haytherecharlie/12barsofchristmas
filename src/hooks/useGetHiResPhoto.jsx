import { useEffect, useState } from "react"
import db from "../api/firebase"

export default function useGetHiResPhoto(selected, setSelected) {
  const [image, setImage] = useState(null)

  useEffect(() => {
    if (selected) getPhoto()
  }, [selected])

  function closeImage() {
    setSelected(null)
    setImage(undefined)
  }

  async function getPhoto() {
    const photo = await db.doc(`photos/${selected}`).get()
    setImage(photo.data())
  }

  return [image, closeImage]
}
