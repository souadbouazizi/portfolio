"use client"

import { useState } from "react"
import Link from "next/link"
import { useSectionScroll, useNavSection } from "@/lib/hooks"
import { NavLinks } from "@/lib/data"
import { ModeToggle } from "./ui/modeToggle"

interface HeaderProps {
  toggleTheme: () => void
  theme: string
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
  const [active, setActive] = useSectionScroll()
  const navToSection = useNavSection()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavLinkClick = (href: string) => {
    setActive(href)
    navToSection(href)
    setMobileMenuOpen(false)
  }

  return (
    <header className="site-header">
      <span className="logo-wrapper">
        <Link href="/">
          <img src="/assets/logo.png" alt="Souad Bouazizi" className="logo" />
        </Link>
        <button
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </span>

      <nav className={`nav ${mobileMenuOpen ? "is-mobile-open" : ""}`}>
        {NavLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            data-active={active === link.href ? "true" : undefined}
            data-slot="nav-link"
            onClick={() => handleNavLinkClick(link.href)}
          >
            {link.label}
          </a>
        ))}
        <hr />
        <Link
          href="/blog"
          data-active={active === "/blog" ? "true" : undefined}
          data-slot="nav-link"
          onClick={() => handleNavLinkClick("/blog")}
        >
          Blog
        </Link>
      </nav>

    
      <ModeToggle/>
    </header>
  )
}

export { Header }
