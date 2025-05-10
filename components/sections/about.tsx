'use client'

import Image from "next/image"
import styles from "@/styles/modules/about.module.css"
import { Info } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Accordion } from "@/components/ui/accordion"
import MotionDiv from '@/components/ui/MotionDiv'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact,  FaNodeJs } from "react-icons/fa";
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
const zoomInOut = {
  hidden: { opacity: 0, x: 50 },  
  visible: {                     
    opacity: 1,                  
    x: 0,                        
    transition: {                
      duration: 0.8,             
      ease: "easeOut",            
    },
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
    <MotionDiv
          variants={zoomInOut}
          initial="hidden"
          animate="visible"
        >
    <h2 className={styles.title}>skills</h2>
    <div className={styles.skills}>
      <FaHtml5 title="HTML5" size={60} color="#dd4b25"  />
      <FaCss3Alt title="CSS3" size={60} color="#254bdd" />
      <FaJsSquare title="JavaScript" size={60} color="#efd81d" />
      <SiTypescript title="TypeScript" size={60} color="#2f74c0" />
      <FaBootstrap title="Bootstrap" size={60} color="#7952b3" />
      <SiTailwindcss title="Tailwind CSS" size={60} color="#00bcff" />
      <FaReact title="React" size={60} color="#0074a6" />
      <SiNextdotjs title="Next.js" size={60} color="#f1f1f1" />
      <FaNodeJs title="Node.js" size={60} color="#68A063" />
      <SiAdobeillustrator title="Adobe Illustrator" size={60} color="#e78b00" />
      <SiAdobephotoshop title="Adobe Photoshop" size={60} color="#2fa3f7" />
      <SiFigma title="Figma" size={60} color="#F24E1E" />
      <SiAdobexd title="Adobe XD" size={60} color="#f75eee"  />
       </div>
      </MotionDiv>
   </section>
)

export { About }
