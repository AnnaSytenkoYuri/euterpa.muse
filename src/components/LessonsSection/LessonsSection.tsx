import Image from "next/image";
import css from "./LessonsSection.module.css";

export default function LessonsSection() {
  return (
    <section className={css.lessonsSection} id="vocal">
      <div className="container">
        <div className={css.lesContentContainer}>
        <div>
        <p className={css.lesTextTitle}>vocal</p>
        <h2 className={css.lesTitle}>Lessons for your development </h2>
        <Image
          src="/images/lessons-image.png"
          alt="Lessons"
          width={359}
          height={189}
          className={css.lessonsImage}
        ></Image>
        </div>    
        <div className={css.lesOptContainer}>
          <div className={css.lesItemContainer}>
            <div className={css.lesTitlAndIconContainer}>
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="14.5"
                  cy="14.5"
                  r="13.5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M22.5 3C22.5 3 21.5 7 14.5 7C8.5 6.5 6.5 2.5 6.5 2.5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M24.5 24.5C24.5 24.5 20.5 21 14.5 21C8 21 5 25 5 25"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M14.5 27.5C14.5 27.5 21.5 22.5081 21.5 14.5C21.5 6.49187 14.5 1 14.5 1"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 28C16 28 8 22.6118 8 14.7547C8 6.89769 15.0588 2 15.0588 2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M1 14H28"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <h3 className={css.lesSubTitle}>ONLINE LESSONS</h3>
            </div>

            <p className={css.lesText}>
              Comfortable lessons from anywhere in the world at a convenient
              time
            </p>
            <ul className={css.lesList}>
              <li className={css.lesItem}>
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.500122 5L2.96422 9.5L11.5001 0.5"
                    stroke="black"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Individual program</span>
              </li>
              <li className={css.lesItem}>
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.500122 5L2.96422 9.5L11.5001 0.5"
                    stroke="black"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Personal and technical development</span>
              </li>
              <li className={css.lesItem}>
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.500122 5L2.96422 9.5L11.5001 0.5"
                    stroke="black"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Support and feedback</span>
              </li>
            </ul>
              <button className={css.lesBtn}>book now</button>
          </div>
          <div className={css.lesItemContainer}>
            <div className={css.lesTitlAndIconContainer}>
              <svg
                width="21"
                height="33"
                viewBox="0 0 21 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10.4999"
                  cy="10.08"
                  r="3.62"
                  stroke="black"
                  strokeWidth="2"
                />
                <path
                  d="M10.5 1C15.7467 1 20 5.2533 20 10.5C20 11.7276 19.4216 13.6513 18.4385 15.9678C17.4734 18.2416 16.1794 20.7564 14.875 23.1094C13.5723 25.4592 12.2691 27.632 11.29 29.2178C10.9942 29.6969 10.727 30.1214 10.5 30.4814C10.273 30.1214 10.0058 29.6969 9.70996 29.2178C8.73094 27.632 7.42765 25.4592 6.125 23.1094C4.82059 20.7564 3.52657 18.2416 2.56152 15.9678C1.57838 13.6513 1 11.7276 1 10.5C1 5.25329 5.2533 1 10.5 1Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <h3 className={css.lesSubTitle}>OFFLINE LESSONS</h3>
            </div>

            <p className={css.lesText}>
              Live lessons in a comfortable atmosphere
            </p>
            <ul className={css.lesList}>
              <li className={css.lesItem}>
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.500122 5L2.96422 9.5L11.5001 0.5"
                    stroke="black"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Professional equipment</span>
                </li>
              <li className={css.lesItem}>
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.500122 5L2.96422 9.5L11.5001 0.5"
                    stroke="black"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Practice and stage experience</span>
                </li>
              <li className={css.lesItem}>
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.500122 5L2.96422 9.5L11.5001 0.5"
                    stroke="black"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Preparation for perfomances</span>
                </li>
            </ul>
              <button className={css.lesBtn}>book now</button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
