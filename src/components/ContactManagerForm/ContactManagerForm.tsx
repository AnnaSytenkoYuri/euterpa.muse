"use client";

import { useForm } from "react-hook-form";
import css from "./ContactManagerForm.module.css";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PerformanceRequestInput,
  performanceRequestSchema,
} from "@/validation/performanceRequestSchema";

interface ContactManagerFormProps {
  onClose: () => void;
}

export default function ContactManagerForm({
//   onClose,
}: ContactManagerFormProps) {
  const {
    register,
    handleSubmit,
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
    console.log(data);
  };

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

        <button type="submit" className={css.submitBtn} disabled={isSubmitting}>
          {isSubmitting ? t("sending") : t("submit")}
        </button>
      </form>
    </div>
  );
}
