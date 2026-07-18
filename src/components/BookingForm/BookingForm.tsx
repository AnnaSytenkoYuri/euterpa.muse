"use client";
import css from "./BookingForm.module.css";
import { useEffect, useRef } from "react";

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
        <p className={css.description}>Fill out the form, and I will contact you to confirm.</p>
      </header>

      <form className={css.form}>
        <div className={css.inputGroup}>
          <input type="text" ref={nameInputRef} placeholder="Your name" className={css.input}/>
          <input type="email" placeholder="Email" className={css.input}/>
          <input type="phone" placeholder="Phone" className={css.input}/>
        </div>

        <div className={css.field}>
          <label htmlFor="lesonFormat">Lesson format</label>
          {/* React Select */}
        </div>

        <div className={css.field}>
          <label htmlFor="date">Date and Time</label>
          {/* <DatePIcker/> */}
        </div>

        <div className={css.field}>
          <label htmlFor="level">Your vocal level</label>
          {/* React Select */}
        </div>

        <div className={css.field}>
          <label htmlFor="message">
            Leave your message <span>optional</span>
          </label>
          <textarea className={css.textarea} placeholder="You can write a message or share your wishes, if you'd like."/>
        </div>

        <button className={css.bookBtn}>book now</button>
      </form>
        <p className={css.policy}>
        By clicking &quot;Book now&quot; you agree to our Privacy Policy.
        </p>
    </div>
  );
}
