"use client";
import css from "./BookingForm.module.css";
import FormSelect from "../FormSelect/FormSelect";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { bookingSchema, type BookingFormValues } from "./validation";
import { useEffect } from "react";
import { error } from "console";

const lessonOptions = [
  {
    value: "online",
    label: "Online lesson",
  },
  {
    value: "offline",
    label: "Offline lesson",
  },
];

const levelOptions = [
  {
    value: "beginner",
    label: "Beginner",
  },
  {
    value: "intermediate",
    label: "Intermediate",
  },
  {
    value: "advanced",
    label: "Advanced",
  },
];

export default function BookingForm() {
  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    shouldFocusError: true,

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      lessonFormat: "",
      vocalLevel: "",
      date: "",
      message: "",
    },
  });

  const onSubmmit = (data: BookingFormValues) => {
    console.log(data);
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

      <form className={css.form} onSubmit={handleSubmit(onSubmmit)}>
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

        <FormSelect
          id="lessonFormat"
          label="Lesson format"
          placeholder="Select a format"
          options={lessonOptions}
        />

        <div className={css.field}>
          <label className={css.label} htmlFor="date">
            Date and Time
          </label>
          <input
            id="date"
            type="text"
            placeholder="Select a date and time"
            className={css.input}
            readOnly
          />
        </div>

        <FormSelect
          id="level"
          label="Your vocal level"
          placeholder="Select a level"
          options={levelOptions}
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

        <button className={css.bookBtn}>book now</button>
      </form>
      <p className={css.policy}>
        By clicking &quot;Book now&quot; you agree to our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </div>
  );
}
