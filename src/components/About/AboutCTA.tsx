"use client";
import { useState } from "react";
import css from "./AboutCTA.module.css";
import Modal from "../Modal/Modal";
import BookingForm from "../BookingForm/BookingForm";

export default function AboutCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  return (
    <>
      <section className={css.section}>
        <div className="container">
          <h1 className={css.title}>Ready to discover your voice?</h1>
          <p className={css.text}>Book your first lesson</p>
          <button onClick={() => setIsOpen(true)} className={css.bookBtn}>Book lesson</button>
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
