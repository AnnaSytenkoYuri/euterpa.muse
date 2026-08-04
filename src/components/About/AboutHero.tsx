import css from "./AboutMe.module.css";

export default function AboutHero() {
  return (
    <section className={css.heroSection}>
      <div className="container">
        <h1 className={css.title}>About Me</h1>

        <p className={css.text}>Vocal coach & performer</p>

        <p className={css.text}>
          Discover your authentic voice through technique, emotion and
          confidence.
        </p>

        <button className={css.bookBtn}>Book a lesson</button>
      </div>
    </section>
  );
}
