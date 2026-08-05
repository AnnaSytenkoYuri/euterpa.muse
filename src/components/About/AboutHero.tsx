import css from "./AboutMe.module.css";

export default function AboutHero() {
  return (
    <section className={css.heroSection}>
      <div className="container">
      <div className={css.content}>
        <h1 className={css.title}>About Me</h1>

        <p className={css.subText}>Vocal coach & performer</p>

        <p className={css.text}>
          Discover your authentic voice <br />through technique, emotion and
          confidence.
        </p>

        <button className={css.bookBtn}>Book a lesson</button>
      </div>
      </div>
    </section>
  );
}
