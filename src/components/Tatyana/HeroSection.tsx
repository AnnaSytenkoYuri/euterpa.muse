import css from "./HeroSection.module.css";

export default function HeroTatyanaSection() {
  return (
    <section className={css.heroTatSection}>
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
