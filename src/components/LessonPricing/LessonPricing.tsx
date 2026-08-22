"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import css from "./LessonPricing.module.css";
import Modal from "../Modal/Modal";
import BookingForm from "../BookingForm/BookingForm";

export default function LessonPricing() {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("LessonPricing");

  const closeModal = () => setIsOpen(false);

  const lessonPlans = [
    {
      id: 1,
      title: t("plans.single.title"),
      subtitle: t("plans.single.subtitle"),
      price: "30 €",
      featured: true,
    },
    {
      id: 2,
      title: t("plans.four.title"),
      subtitle: t("plans.four.subtitle"),
      price: "100 €",
      details: t("plans.four.details"),
    },
    {
      id: 3,
      title: t("plans.eight.title"),
      subtitle: t("plans.eight.subtitle"),
      price: "160 €",
      details: t("plans.eight.details"),
    },
    {
      id: 4,
      title: t("plans.first.title"),
      subtitle: t("plans.first.subtitle"),
      price: t("plans.first.price"),
      details: t("plans.first.details"),
    },
  ];

  return (
    <>
      <section className={css.planSection}>
        <div className="container">
          <p className={css.upTitle}>
            {t("upTitle")}
          </p>

          <h2 className={css.sectionTitle}>
            {t("title")}
          </h2>

          <ul className={css.pricingGrid}>
            {lessonPlans.map((plan) => (
              <li
                key={plan.id}
                className={`${css.card} ${
                  plan.featured ? css.featured : ""
                }`}
              >
                <h3 className={css.title}>
                  {plan.title}
                </h3>

                {plan.subtitle && (
                  <p className={css.subtitle}>
                    ({plan.subtitle})
                  </p>
                )}

                <div className={css.divider} />

                <p className={css.price}>
                  {plan.price}
                </p>

                {plan.details && (
                  <p className={css.details}>
                    {plan.details}
                  </p>
                )}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={css.bookBtn}
            onClick={() => setIsOpen(true)}
          >
            {t("bookTrial")}
          </button>
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