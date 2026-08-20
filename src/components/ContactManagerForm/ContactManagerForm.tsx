"use client";

import { useForm } from "react-hook-form";
import css from "./ContactManagerForm.module.css";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PerformanceRequestInput,
  performanceRequestSchema,
} from "@/validation/performanceRequestSchema";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ContactManagerFormProps {
  onClose: () => void;
}

export default function ContactManagerForm({
  onClose,
}: ContactManagerFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    setFocus,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PerformanceRequestInput>({
    resolver: zodResolver(performanceRequestSchema),

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const t = useTranslations("PerformanceRequestForm");

  const onSubmit = async (data: PerformanceRequestInput) => {
    try {
      const response = await fetch("/api/performance-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send request.");
      }

      console.log("Success:", result);

      setIsSuccess(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      reset();

      onClose();
    } catch (error) {
      console.error("Submit error:", error);
    }
  };
  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  return (
    <div className={css.formWrapper}>
      <h2 className={css.title}>{t("title")}</h2>

      <p className={css.description}>{t("description")}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.field}>
          <input
            {...register("name")}
            className={`${css.input} ${errors.name ? css.inputError : ""}`}
            placeholder={t("name")}
          />

          {errors.name && <p className={css.error}>{t("errors.name")}</p>}
        </div>
        <div className={css.field}>
          <input
            {...register("email")}
            type="email"
            className={`${css.input} ${errors.email ? css.inputError : ""}`}
            placeholder={t("email")}
          />

          {errors.email && <p className={css.error}>{t("errors.email")}</p>}
        </div>

        <div className={css.field}>
          <input
            {...register("phone")}
            type="tel"
            className={css.input}
            placeholder={t("phone")}
          />
        </div>
        <div className={css.field}>
          <textarea
            {...register("message")}
            className={css.textarea}
            placeholder={t("message")}
          />
        </div>

        {isSuccess && (
          <div className={css.success}>
            <p className={css.successTitle}>✓ {t("successTitle")}</p>
            <p className={css.successText}>{t("successText")}</p>
          </div>
        )}

        <button type="submit" className={css.submitBtn} disabled={isSubmitting}>
          {isSubmitting ? t("sending") : t("submit")}
        </button>
        <p className={css.policy}>
          {t("policyBefore")}{" "}
          <Link href="/privacy">
            <strong>{t("privacyPolicy")}</strong>
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
