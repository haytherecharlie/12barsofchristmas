import { useState, useEffect } from "react"

export default function useLoading() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  return [loading, setLoading]
}
