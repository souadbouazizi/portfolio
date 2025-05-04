import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { Info } from "@/lib/data"
import styles from '@/styles/modules/hero.module.css';

const Hero = () => {
  const title = Info.name;

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.cta}>
        <h1 className={styles.animatedTitle}>
          {title.split("").map((letter, index) => (
            <span
              key={index}
              className={styles.letter}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>

        <p className={styles.fadeInBottom} style={{ animationDelay: `${title.length * 0.1 + 0.5}s` }}>
          Passionate about developing modern and intuitive interfaces.
          <br />
          Specialized in React.js and front-end technologies.
        </p>

        <a
          href="/assets/cv.pdf"
          target="_blank"
          className={styles.fadeInBottom}
          style={{ animationDelay: `${title.length * 0.1 + 1}s` }}
        >
          <Button title="download cv" icon={Download} size="large" />
        </a>
      </div>
    </section>
  );
};

export { Hero };
