"use client";
// import Image from "next/image";
import { useState } from "react";
import css from "./HeroSection.module.css";
import Modal from "../Modal/Modal";
import BookingForm from "../BookingForm/BookingForm";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className={css.heroSection}>
        <div className="container">
          <div className={css.heroContent}>
            <div>
              <h1 className={css.heroTitle}>
                <span className={css.titleSpan}>VOICE</span>
                <br />
                That Impresses
              </h1>
              <h3 className={css.heroSubTitle}>
                Singer. Artist. Vocal Teacher
              </h3>
              <p className={css.heroText}>
                Helps you discover your voice and confidence. <br /> Online and
                offline lessons for any level.
              </p>
              <div className={css.heroButtons}>
                <button
                  className={css.heroBtnFrst}
                  onClick={() => setIsOpen(true)}
                >
                  <span>book lesson</span>
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.1 9.5L11.5 5L7.1 0.5M11.5 5H0.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className={css.heroBtnSec}>learn more</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <BookingForm />
        </Modal>
      )}
    </>
  );
}
