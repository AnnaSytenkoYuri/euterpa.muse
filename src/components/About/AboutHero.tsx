"use client";
import { useState } from "react";
import css from "./AboutMe.module.css";
import Modal from "../Modal/Modal";
import BookingForm from "../BookingForm/BookingForm";

export default function AboutHero() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  return (
    <>
      <section className={css.heroSection}>
        <div className="container">
          <div className={css.content}>
            <h1 className={css.title}>About Me</h1>

            <p className={css.subText}>Vocal coach & performer</p>

            <p className={css.text}>
              Discover your authentic voice <br />
              through technique, emotion and confidence.
            </p>

            <button className={css.bookBtn} onClick={() => setIsOpen(true)}>
              Book a lesson
            </button>
          </div>
        </div>
      </section>

      {isOpen && (
        <Modal onClose={closeModal}>
          <BookingForm onClose={closeModal} />
        </Modal>
      )}
    </>
  );
}
