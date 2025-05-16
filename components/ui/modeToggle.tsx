// ModeToggle.tsx
"use client"
import { useState, useEffect } from "react"
import styles from "@/styles/modules/modeToggle.module.css"

export function ModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark") setIsDark(true)
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light")
    document.body.className = isDark ? styles.dark : styles.light
  }, [isDark])

  return (
    <button onClick={() => setIsDark(!isDark)} style={{marginLeft: '1rem'}}>
      {isDark ? "☀️" : "🌙"}
    </button>
  )
}
