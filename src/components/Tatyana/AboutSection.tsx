import css from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={css.about}>
      <div className="container">

        <h2 className={css.title}>Acoustic Sounds</h2>

        <p className={css.text}>
          TetJANa Acoustic Sounds is an acoustic duo that creates intimate
          musical experiences through expressive vocals and masterful guitar
          performance.
        </p>

        <p className={css.text}>
          The duo brings together <strong>Tetiana Makarova</strong> (vocals &
          percussion), originally from Ukraine, and <strong>Jan Gnyp</strong>{" "}
          (guitar), from Upper Silesia, Germany.
        </p>

        <p className={css.text}>
          Their repertoire blends international music with original
          compositions, moving effortlessly between folk, jazz, emotional
          ballads, and vibrant acoustic arrangements.
        </p>

        <p className={css.text}>
          Inspired by the richness of Slavic musical traditions, TetJANa
          Acoustic Sounds combines heartfelt melancholy with warmth, hope, and
          joy.
        </p>

        <p className={css.text}>
          Whether performing on a concert stage or during life&apos;s most meaningful
          celebrations, the duo creates a warm and personal atmosphere that
          stays with audiences long after the final note.
        </p>

      </div>
    </section>
  );
}