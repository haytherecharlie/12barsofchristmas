import { useEffect, useState } from "react"
import { START_DATE } from "../config/constants"

export default function useStartDate() {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    scrollTo(0, 0)
    const now = new Date().getTime()
    const startDate = new Date(START_DATE).getTime()

    setStarted(startDate - now < 1)
  }, [])

  return [started, START_DATE]
}
