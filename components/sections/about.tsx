'use client'

import Image from "next/image"
import styles from "@/styles/modules/about.module.css"
import { Info } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Accordion } from "@/components/ui/accordion"
import MotionDiv from '@/components/ui/MotionDiv'

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

      <MotionDiv
        className={styles.right}
        variants={fadeInRight}
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
    </div>
  </section>
)

export { About }
