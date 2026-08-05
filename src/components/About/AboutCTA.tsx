import css from "./AboutCTA.module.css";

export default function AboutCTA() {
    return (
        <section className={css.section}>
        <div className="container">
            <h1 className={css.title}>Ready to discover your voice?</h1>
            <p className={css.text}>Book your first lesson</p>
            <button className={css.bookBtn}>Book lesson</button>
        </div>
        </section>
    );
}