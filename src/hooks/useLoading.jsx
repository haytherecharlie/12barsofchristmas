import { useState, useEffect } from "react"

export default function useLoading() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // setTimeout(() => setLoading(false), 0)
  }, [])

  return [loading, setLoading]
}
