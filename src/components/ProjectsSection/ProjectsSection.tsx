import Image from "next/image";
import css from "./ProjectsSection.module.css";
export default function ProjectsSection() {
  return (
    <section className={css.projectsSection}>
      <div className="container">
        <div className={css.projectsSectionContent}>
          <p className={css.projectUpTitle}>projects</p>
          <h2 className={css.projectTitle}>My projects</h2>
          <div className={css.projectsCardsContainer}>
            <div className={css.projectCard}>
              <Image
                src="/images/band-at-work1.png"
                alt="Project"
                width={260}
                height={212} 
                className={css.projectImage}
              />
              <div className={css.overlay}>
                <h3 className={css.cardTitle}>BAND AT WORK</h3>
                <p className={css.cardCategory}>Alternative Pop | Indie</p>
                <button className={css.learnBtn}>
                  <span>Learn More</span>
                  <svg>...</svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
