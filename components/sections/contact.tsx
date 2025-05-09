import styles from "@/styles/modules/contact.module.css"
import { ContactForm } from "@/components/contact-form"
import Image from "next/image"
import MotionDiv from '@/components/ui/MotionDiv'

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


const Contact = () => (
  <section id="contact" className={styles.section}>
    <div className={styles.block}>
    <MotionDiv
        className={styles.left}
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
      <div className={styles.info}>
        <h2>Contact us</h2>
        <p>
          Let&apos;s get in touch!
          <br />
          You can reach out for collaborations, questions, or just to say hi.
        </p>

        <div className={styles.contactForm} >
        <ContactForm />
        </div>
      </div>
      </MotionDiv>
      <MotionDiv
        className={styles.right}
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
      <div className={styles.imageWrapper}>
        <Image
          src="/assets/say-hi.svg"
          alt="Say Hi"
          width={600} 
          height={600}
          priority
        />
      </div>
      </MotionDiv>
    </div>
  </section>
)

export { Contact }
