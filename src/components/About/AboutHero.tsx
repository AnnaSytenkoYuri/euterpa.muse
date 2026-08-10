"use client";
import { useState } from "react";
import css from "./AboutMe.module.css";
import Modal from "../Modal/Modal";
import BookingForm from "../BookingForm/BookingForm";
import { useTranslations } from "next-intl";

export default function AboutHero() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const t = useTranslations("AboutHero");
  return (
    <>
      <section className={css.heroSection}>
        <div className="container">
          <div className={css.content}>
            <h1 className={css.title}>{t("title")}</h1>

            <p className={css.subText}>{t("subtitle")}</p>

            <p className={css.text}>
            {t("descriptionLine1")} <br />
            {t("descriptionLine2")}
            </p>

            <button className={css.bookBtn} onClick={() => setIsOpen(true)}>
            {t("bookLesson")}
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
