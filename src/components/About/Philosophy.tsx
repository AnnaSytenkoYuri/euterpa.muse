import Image from "next/image";
import css from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.contentContainer}>
          <div className={css.phylosophyCard}>
            <h3 className={css.upTitle}>story</h3>
            <h1 className={css.title}>My Philosophy</h1>
            <p className={css.text}>
              I believe that every singer has a unique voice and story to tell.
              My approach to vocal coaching is centered around helping singers
              find their authentic voice, while also developing the technical
              skills necessary to perform with confidence and emotion.
            </p>

            <p className={css.text}>
              Through personalized coaching, I help singers explore their vocal
              range, improve their breath control, and develop their own style
              and interpretation of songs. I also emphasize the importance of
              stage presence and performance techniques, so that singers can
              connect with their audience and deliver a memorable performance.
            </p>

            <p className={css.text}>
              Whether you&apos;re a beginner or an experienced performer, my
              goal is to help you unlock your full potential as a singer and
              express yourself through music.
            </p>
          </div>

          <Image
            src="/images/ hero-mob-image2.png"
            alt="Biography"
            width={400}
            height={600}
            className={css.image}
          />
        </div>
      </div>
    </section>
  );
}
