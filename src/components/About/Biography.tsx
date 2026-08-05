import Image from "next/image";
import css from "./Biography.module.css";

export default function Biography() {
  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.contentContainer}>
          <Image
            src="/images/ hero-mob-image2.png"
            alt="Biography"
            width={400}
            height={600}
            className={css.image}
          />
          <div className={css.storyCard}>
            <h3 className={css.upTitle}>story</h3>
            <h1 className={css.title}>My Story</h1>

            <p className={css.text}>
              Music has always been more than a profession to me—it is a way to
              connect, express emotions, and inspire others. As a vocal coach
              and performer, I believe that every voice is unique and deserves
              to be heard with confidence. My lessons are designed to help
              students develop healthy vocal technique, strengthen their
              musicality, and build the confidence to perform on stage or simply
              enjoy singing in everyday life. Whether you are a complete
              beginner or an experienced singer, I create a supportive
              environment where learning feels inspiring and enjoyable.
            </p>

            <p className={css.text}>
              Over the years, I have worked with students of different ages and
              skill levels, helping them discover their authentic sound and
              achieve their personal goals. My teaching approach combines
              technical training, creativity, and individual attention, allowing
              each student to progress at their own pace. For me, teaching is
              not only about improving vocal skills—it is about encouraging
              self-expression, building confidence, and sharing the joy of
              music. I look forward to being part of your musical journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
