"use client";
import css from "./BookingForm.module.css";
import { useEffect, useRef } from "react";
import FormSelect from "../FormSelect/FormSelect";

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
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

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

      <form className={css.form}>
        <div className={css.inputGroup}>
          {/* <label htmlFor="name"></label> */}
          <input
            // id="name"
            type="text"
            ref={nameInputRef}
            placeholder="Your name"
            className={css.input}
          />
          {/* <label htmlFor="email"></label> */}
          <input
            // id="email"
            type="email"
            placeholder="Email"
            className={css.input}
          />
          {/* <label htmlFor="tel"></label> */}
          <input
            // id="tel"
            type="tel"
            placeholder="Phone"
            className={css.input}
          />
        </div>

        <div className={css.field}>
          <FormSelect
            label="Lesson format"
            placeholder="Select a format"
            options={lessonOptions}
          />
        </div>

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

        <div className={css.field}>
          <FormSelect
            label="Your vocal level"
            placeholder="Select a level"
            options={levelOptions}
          />
        </div>

        <div className={css.field}>
          <label className={css.label} htmlFor="message">
            Leave your message <span className={css.optional}>(optional)</span>
          </label>
          <textarea
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
