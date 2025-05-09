'use client'

import Image from "next/image"
import styles from "@/styles/modules/about.module.css"
import { Info } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Accordion } from "@/components/ui/accordion"
import MotionDiv from '@/components/ui/MotionDiv'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiAdobeillustrator, SiAdobephotoshop, SiFigma, SiAdobexd } from "react-icons/si";

// Définition des animations
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const About = () => (
  <section id="about">
    <div className={styles.container}>
    <MotionDiv
        className={styles.left}
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <figure className={styles.avatar}>
          <div className={styles.image}>
            <Image src={Info.image} alt={Info.name} fill priority />
          </div>
          <figcaption className={styles.bio}>{Info.bio}</figcaption>
        </figure>
      </MotionDiv>
      <MotionDiv
        className={styles.right}
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.experience}>
          {Info.experience?.map((item, index) => (
            <Accordion key={item.title} title={item.title} open={index === 0}>
              {item.details}
            </Accordion>
          ))}
        </div>
        <div className={styles.action}>
          <a title="Contact Me" href={`mailto:${Info.email}`}>
            <Button title="Contact Me" variant="primary" size="medium" />
          </a>
        </div>
      </MotionDiv>

      
    </div>
    <h2 className={styles.title}>skills</h2>
    <div className={styles.skills}>
      <FaHtml5 title="HTML5"  style={{ fontSize: "6rem" }}/>
      <FaCss3Alt title="CSS3"  style={{ fontSize: "6rem" }}/>
      <FaJsSquare title="JavaScript"  style={{ fontSize: "6rem" }}/>
      <SiTypescript title="TypeScript"  style={{ fontSize: "6rem" }}/>
      <FaBootstrap title="Bootstrap"  style={{ fontSize: "6rem" }}/>
      <SiTailwindcss title="Tailwind CSS"  style={{ fontSize: "6rem" }}/>
      <FaReact title="React"  style={{ fontSize: "6rem" }}/>
      <SiNextdotjs title="Next.js"  style={{ fontSize: "6rem" }}/>
      <SiAdobeillustrator title="Adobe Illustrator"  style={{ fontSize: "6rem" }}/>
      <SiAdobephotoshop title="Adobe Photoshop"  style={{ fontSize: "6rem" }}/>
      <SiFigma title="Figma"  style={{ fontSize: "6rem" }}/>
      <SiAdobexd title="Adobe XD"   style={{ fontSize: "6rem" }}/>


</div>
  </section>
)

export { About }
