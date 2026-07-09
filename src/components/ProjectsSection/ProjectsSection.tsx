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
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.1 9.5L11.5 5L7.1 0.5M11.5 5H0.5"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className={css.projectCard}>
              <Image
                src="/images/TatYana1.png"
                alt="Project"
                width={260}
                height={212}
                className={css.projectImage}
              />
              <div className={css.overlay}>
                <h3 className={css.cardTitle}>TatYANa</h3>
                <p className={css.cardCategory}>Alternative Pop | Indie</p>
                <button className={css.learnBtn}>
                  <span>Learn More</span>
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.1 9.5L11.5 5L7.1 0.5M11.5 5H0.5"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className={css.projectCard}>
              <Image
                src="/images/hardy1.png"
                alt="Project"
                width={260}
                height={212}
                className={css.projectImage}
              />
              <div className={css.overlay}>
                <h3 className={css.cardTitle}>Hardy</h3>
                <p className={css.cardCategory}>Alternative Pop | Indie</p>
                <button className={css.learnBtn}>
                  <span>Learn More</span>
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.1 9.5L11.5 5L7.1 0.5M11.5 5H0.5"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
