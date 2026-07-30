"use client";
import css from "./BookingForm.module.css";
import FormSelect from "../FormSelect/FormSelect";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { BookingFormInput, bookingSchema} from "./validation";
import { useEffect, useState } from "react";
import DatePicker from "../DatePicker/DatePicker";
import {
  lessonOptions,
  lessonTimeOptions,
  levelOptions,
} from "@/constants/formOptions";

interface BookingFormProps {
  onClose: () => void;
}

export default function BookingForm({onClose}: BookingFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);

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
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 3000));
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
          Book a lesson
        </h2>
        <p className={css.description}>
          Fill out the form, and I will contact you to confirm.
        </p>
      </header>

      {isSuccess && (
        <div className={css.success}>
          <p className={css.successTitle}>
            ✓ Booking request sent successfully!
          </p>
          <p className={css.successText}>
            Thank you for your booking. I&apos;ll contact you as soon as
            possible to confirm your lesson.
          </p>
        </div>
      )}

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputGroup}>
          {/* <label htmlFor="name"></label> */}
          <input
            // id="name"
            {...register("name")}
            type="text"
            placeholder="Your name"
            className={`${css.input} ${errors.name ? css.inputError : ""}`}
          />
          {errors.name && <p className={css.error}>{errors.name.message}</p>}
          {/* <label htmlFor="email"></label> */}
          <input
            // id="email"
            {...register("email")}
            type="email"
            placeholder="Email"
            className={`${css.input} ${errors.email ? css.inputError : ""}`}
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}
          {/* <label htmlFor="tel"></label> */}
          <input
            // id="tel"
            {...register("phone")}
            type="tel"
            placeholder="Phone"
            className={`${css.input} ${errors.phone ? css.inputError : ""}`}
          />
          {errors.phone && <p className={css.error}>{errors.phone.message}</p>}
        </div>
        <Controller
          name="lessonFormat"
          control={control}
          render={({ field }) => (
            <FormSelect
              field={field}
              id="lessonFormat"
              label="Lesson format"
              placeholder="Select a format"
              options={lessonOptions}
              error={errors.lessonFormat?.message}
            />
          )}
        />

        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <DatePicker
              field={field}
              label="Date"
              error={errors.date?.message}
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
              label="Time"
              placeholder="Select a time"
              options={lessonTimeOptions}
              error={errors.lessonTime?.message}
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
              label="Your vocal level"
              placeholder="Select a level"
              options={levelOptions}
              error={errors.vocalLevel?.message}
            />
          )}
        />

        <div className={css.field}>
          <label className={css.label} htmlFor="message">
            Leave your message <span className={css.optional}>(optional)</span>
          </label>
          <textarea
            {...register("message")}
            id="message"
            className={css.textarea}
            placeholder="You can write a message or share your wishes, if you'd like."
          />
        </div>

        <button className={css.bookBtn} disabled={isSubmitting}>
          {isSubmitting ? "Seding..." : "Book now"}
        </button>
      </form>
      <p className={css.policy}>
        By clicking &quot;Book now&quot; you agree to our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </div>
  );
}
