"use client"

import { useEffect, useState } from "react"

export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchVisits() {
      try {
        const response = await fetch("/api/visits")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setCount(data.count)
      } catch (e) {
        console.error("Failed to fetch visit count:", e)
        setError("Erro ao carregar visitas.")
      }
    }
    fetchVisits()
  }, [])

  if (error) {
    return <p className="text-red-400 text-sm">{error}</p>
  }

  if (count === null) {
    return (
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <i className="fas fa-spinner fa-spin"></i>
        <span>Carregando...</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 text-gray-500 text-sm">
      <i className="fas fa-eye text-lg text-gray-400"></i> {/* Eye icon for visits */}
      <span className="font-bold text-white">{count}</span>
    </div>
  )
}
