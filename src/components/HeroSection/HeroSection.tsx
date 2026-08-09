"use client";
// import Image from "next/image";
import { useState } from "react";
import css from "./HeroSection.module.css";
import Modal from "../Modal/Modal";
import BookingForm from "../BookingForm/BookingForm";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Hero");

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <section className={css.heroSection}>
        <div className="container">
          <div className={css.heroContent}>
            <div>
              <h1 className={css.heroTitle}>
                <span className={css.titleSpan}>{t('title')}</span>
                <br />
                {t("titleAccent")}
              </h1>
              <h3 className={css.heroSubTitle}>
                {t("subtitle")}
              </h3>
              <p className={css.heroText}>
                {t("description")}
              </p>
              <div className={css.heroButtons}>
                <button
                  className={css.heroBtnFrst}
                  onClick={() => setIsOpen(true)}
                >
                  <span>{t("bookLesson")}</span>
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
                <Link href="/about" className={css.heroBtnSec}>
                  {t("learnMore")}
                </Link>
              </div>
            </div>
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
