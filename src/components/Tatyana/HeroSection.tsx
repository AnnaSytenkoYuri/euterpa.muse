import Image from "next/image";
import css from "./HeroSection.module.css";

export default function HeroTatyanaSection() {
  return (
    <section className={css.heroTatSection}>
      <Image
        src="/images/TatYANa.png"
        alt="TatYANa Acoustic Sounds"
        fill
        priority
        className={css.image}
      />
      <div className={css.overlay}></div>

      <div className="container">
        <div className={css.content}>
          <h1 className={css.title}>TatYANa</h1>

          <p className={css.text}>
            AUTHENTIC ACOUSTIC MUSIC
            <br />
            FOR UNFORGETTABLE MOMENTS
          </p>
        </div>
      </div>
    </section>
  );
}
