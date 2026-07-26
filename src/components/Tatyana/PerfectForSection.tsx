import css from "./PerfectForSection.module.css";

export default function PerfectForSection() {
  return (
    <section className={css.section}>
      <div className="container">

        <div className={css.card}>

          <span className={css.icon}>✓</span>

          <h2 className={css.title}>Perfect For</h2>

          <ul className={css.list}>

            <li className={css.item}>🎵 Concerts & Cultural Events</li>

            <li className={css.item}>💍 Weddings</li>

            <li className={css.item}>⛪ Church Services</li>

            <li className={css.item}>🎉 Private Events</li>

          </ul>

          <button className={css.bookBtn}>BOOK NOW</button>

          <p className={css.text}>
            Every performance is unique, personal, and created with genuine
            passion for live music.
          </p>

        </div>

      </div>
    </section>
  );
}