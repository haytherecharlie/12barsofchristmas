import db from "../api/firebase"
import imagenation from "../libs/imagenation"

export default function useTakePhoto() {
  async function uploadPhoto({ target }) {
    const time = new Date().getTime()
    const file = target.files[0]
    const [full, thumb] = await Promise.all([imagenation(file, 500), imagenation(file, 120)])
    db.doc(`photos/${time}`).set({ timestamp: time, data: full })
    db.doc(`thumbnails/${time}`).set({ timestamp: time, data: thumb })
  }

  return [uploadPhoto]
}
