"use client";
import { useState } from "react";
import css from "./AboutCTA.module.css";
import Modal from "../Modal/Modal";
import BookingForm from "../BookingForm/BookingForm";
import { useTranslations } from "next-intl";

export default function AboutCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("AboutCTA");
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <section className={css.section}>
        <div className="container">
          <h1 className={css.title}>{t("title")}</h1>
          <p className={css.text}>{t("text")}</p>
          <button onClick={() => setIsOpen(true)} className={css.bookBtn}>{t("bookLesson")}</button>
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
