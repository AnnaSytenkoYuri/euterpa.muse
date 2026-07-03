import Image from "next/image";
import css from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={css.heroSection}>
      <div className="container">
        <div className={css.heroContent}>
          <div>
          <h1 className={css.heroTitle}>
            <span className={css.titleSpan}>VOICE</span><br />
            That Impresses
          </h1>
          <h3 className={css.heroSubTitle}>Singer. Artist. Vocal Teacher</h3>
          <p className={css.heroText}>
            Helps you discover your voice and confidence. <br /> Online and offline
            lessons for any level.
          </p>
          <div className={css.heroButtons}>
            <button className={css.heroBtnFrst}>book lesson</button>
            <button className={css.heroBtnSec}>learn more</button>
          </div>
          </div>
          <div className={css.heroImageWrapper}>
            <Image src="/images/hero-image.png" alt="Hero Image" width={572} height={622} className={css.heroImage} />
          </div>
        </div>
      </div>
    </section>
  );
}
