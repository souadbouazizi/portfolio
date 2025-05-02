import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ptSans, montserrat } from "@/lib/fonts"
import type { Metadata } from "next"

import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Souad's Portfolio",
  description: `Front-End Developer Portfolio Description

Here, I showcase a range of projects that highlight my skills in building responsive, user-friendly, and visually appealing web applications.
Each project demonstrates my expertise in HTML, CSS, JavaScript, and modern frameworks like React and Bootstrap.
From landing pages to dynamic web apps, I focus on creating clean code, intuitive interfaces, and seamless user experiences.
This portfolio reflects my passion for front-end development, attention to detail, and continuous growth in the tech world.`,
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
  {/* <!-- Balises générales --> */}
  <title>Front-End React Developer | My Portfolio</title>
  <meta name="description" content="I'm a front-end developer specializing in React.js. Learn more about my projects, skills, and experience." />
  <meta name="keywords" content="front-end developer, React, React.js, portfolio, JavaScript, web developer, HTML, CSS, Bootstrap, TailwindCSS, projets web" />
  <meta name="author" content="Souad BOUAZIZI" />
  <meta name="robots" content="index, follow" />

  {/* <!-- Responsive --> */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* <!-- Open Graph (partage réseaux sociaux) --> */}
  <meta property="og:title" content="Front-End React Developer | My Portfolio" />
  <meta property="og:description" content="I'm a front-end developer specializing in React.js. Check out my projects and skills." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://myportfolio.com" />
  <meta property="og:image" content="https://myportfolio.vercel.app/imgfile/hero.jpg" />

  {/* <!-- Twitter Card --> */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Front-End React Developer | My Portfolio" />
  <meta name="twitter:description" content="Passionate React developer. Discover my projects and expertise." />
  <meta name="twitter:image" content="https://myportfolio.vercel.app/imgfile/hero.jpg" />

  {/* <!-- Favicon (optionnel mais recommandé) --> */}
  <link rel="icon" href="/assets/favicon.ico" />
</head>
      <body className={`${ptSans.variable} ${montserrat.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
