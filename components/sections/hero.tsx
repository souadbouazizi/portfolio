import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { Info } from "@/lib/data"

const Hero = () => {
  return (
    <section id="hero">
      <h1>{Info.name}</h1>
      Passionate about developing modern and intuitive interfaces.
          <br />
          Specialized in React.js and front-end technologies.
      <a href="/assets/cv.pdf" target="_blank">
      <Button title="download cv" icon={Download} size="large" />
      </a>
    </section>
  )
}

export { Hero }
