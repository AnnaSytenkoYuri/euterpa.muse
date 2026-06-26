import css from './HeroSection.module.css';

export default function HeroSection() {
    return(
        <section className={css.heroSection}>
        <div className={css.heroContent}>
        <h1>VOICE <br />That Impresses</h1>
        <h3>Singer. Artist. Vocal Teacher</h3>
        <p>Helps you discover your voice and confidence. Online and offline lessons for any level</p>
        <div className={css.heroButtons}>
          <button className={css.heroBtnFrst}>book lesson</button>
          <button className={css.heroBtnSec}>learn more</button>
        </div>
      </div>
        </section>
    )
}