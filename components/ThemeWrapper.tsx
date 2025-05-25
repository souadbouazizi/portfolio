"use client"

import { useEffect, useState } from "react"
import { Header } from "./header"

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light-theme")

  const toggleTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    setTheme(saved || "light-theme")
  }, [])

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      {children}
    </>
  )
}
