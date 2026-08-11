"use client";
import css from "./BookingForm.module.css";
import FormSelect from "../FormSelect/FormSelect";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  BookingFormInput,
  bookingSchema,
} from "../../validation/bookingFormSchema";
import { useEffect, useState } from "react";
import DatePicker from "../DatePicker/DatePicker";
import {
  lessonOptions,
  lessonTimeOptions,
  levelOptions,
} from "@/constants/formOptions";
import { Link } from "../../../i18n/navigation";
import { useTranslations } from "next-intl";

interface BookingFormProps {
  onClose: () => void;
}

export default function BookingForm({ onClose }: BookingFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const t = useTranslations("BookingForm");
  
  const translatedLessonOptions = lessonOptions.map((option) => ({
    value: option.value,
    label: t(`lessonOptions.${option.value}`),
  }));
  
  const translatedLevelOptions = levelOptions.map((option) => ({
    value: option.value,
    label: t(`levelOptions.${option.value}`),
  }));

  const {
    register,
    setFocus,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormInput>({
    resolver: zodResolver(bookingSchema),
    shouldFocusError: true,

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      lessonFormat: "",
      vocalLevel: "",
      date: null,
      lessonTime: "",
      message: "",
    },
  });

  const onSubmit = async (data: BookingFormInput) => {
    const response = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message);
    }

    setIsSuccess(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    reset();
    onClose();
  };

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  return (
    <div className={css.bookingForm}>
      <header className={css.header}>
        <h2 id="booking-modal-title" className={css.title}>
          {t("title")}
        </h2>
        <p className={css.description}>{t("subtitle")}</p>
      </header>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputGroup}>
          {/* <label htmlFor="name"></label> */}
          <input
            // id="name"
            {...register("name")}
            type="text"
            placeholder={t("namePlaceholder")}
            className={`${css.input} ${errors.name ? css.inputError : ""}`}
          />
          {errors.name?.message && (
            <p className={css.error}>
              {t(`validation.${errors.name.message}`)}
            </p>
          )}
          {/* <label htmlFor="email"></label> */}
          <input
            // id="email"
            {...register("email")}
            type="email"
            placeholder={t("emailPlaceholder")}
            className={`${css.input} ${errors.email ? css.inputError : ""}`}
          />
          {errors.email?.message && (
            <p className={css.error}>
              {t(`validation.${errors.email.message}`)}
            </p>
          )}
          {/* <label htmlFor="tel"></label> */}
          <input
            // id="tel"
            {...register("phone")}
            type="tel"
            placeholder={t("phonePlaceholder")}
            className={`${css.input} ${errors.phone ? css.inputError : ""}`}
          />
          {errors.phone?.message && (
            <p className={css.error}>
              {t(`validation.${errors.phone.message}`)}
            </p>
          )}
        </div>
        <Controller
          name="lessonFormat"
          control={control}
          render={({ field }) => (
            <FormSelect
              field={field}
              id="lessonFormat"
              label={t("lessonFormatLabel")}
              placeholder={t("lessonFormatPlaceholder")}
              options={translatedLessonOptions}
              error={ errors.lessonFormat?.message
                ? t(`validation.${errors.lessonFormat.message}`)
                : undefined}
            />
          )}
        />

        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <DatePicker
              field={field}
              label={t("dateLabel")}
              placeholder={t("datePlaceholder")}
              error={ errors.date?.message
                ? t(`validation.${errors.date.message}`)
                : undefined}
            />
          )}
        />

        <Controller
          name="lessonTime"
          control={control}
          render={({ field }) => (
            <FormSelect
              field={field}
              id="time"
              label={t("timeLabel")}
              placeholder={t("timePlaceholder")}
              options={lessonTimeOptions}
              error={ errors.lessonTime?.message
                ? t(`validation.${errors.lessonTime.message}`)
                : undefined}
            />
          )}
        />

        <Controller
          name="vocalLevel"
          control={control}
          render={({ field }) => (
            <FormSelect
              field={field}
              id="level"
              label={t("levelLabel")}
              placeholder={t("levelPlaceholder")}
              options={translatedLevelOptions}
              error={ errors.vocalLevel?.message
                ? t(`validation.${errors.vocalLevel.message}`)
                : undefined}
            />
          )}
        />

        <div className={css.field}>
          <label className={css.label} htmlFor="message">
            {t("messageLabel")}{" "}
            <span className={css.optional}>({t("optional")})</span>
          </label>
          <textarea
            {...register("message")}
            id="message"
            className={css.textarea}
            placeholder={t("messagePlaceholder")}
          />
        </div>

        {isSuccess && (
          <div className={css.success}>
            <p className={css.successTitle}>✓ {t("successTitle")}</p>
            <p className={css.successText}>{t("successText")}</p>
          </div>
        )}
        <button className={css.bookBtn} disabled={isSubmitting}>
          {isSubmitting ? t("sending") : t("bookNow")}
        </button>
      </form>
      <p className={css.policy}>
        {t("policyBefore")}{" "}
        <Link href="/privacy-policy">
          <strong>{t("privacyPolicy")}</strong>
        </Link>
        .
      </p>
    </div>
  );
}
