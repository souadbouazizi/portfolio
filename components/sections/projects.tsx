'use client'
import { Card } from "@/components/ui/card"
import { Projects as ProjectsData } from "@/lib/data"
import styles from "@/styles/modules/projects.module.css"
import MotionDiv from '@/components/ui/MotionDiv'
import { fadeIn, zoomInOut, slideLeft, slideRight, rotateIn } from "@/lib/motionVariants"


const Projects = () => (
  <section id="projects">
    <MotionDiv
      className={styles.right}
      variants={fadeIn}  
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
    <h2 className={styles.title}>Our projects</h2>
    <div className={styles["projects-grid"]}>
      {ProjectsData.map((project, index) => (
         
        <Card key={index} {...project} />
        
      ))}
    </div>
    </MotionDiv>
  </section>
)

export { Projects }
