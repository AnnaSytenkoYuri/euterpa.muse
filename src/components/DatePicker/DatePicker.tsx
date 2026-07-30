"use client";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import type { ControllerRenderProps } from "react-hook-form";
import type { BookingFormInput } from "../BookingForm/validation";
import css from "./DatePicker.module.css"

interface DatePickerProps {
  field: ControllerRenderProps<BookingFormInput, "date">;
  label: string;
  error?: string;
}

export default function DatePicker({
  field,
  label,
  error,
}: DatePickerProps) {

  return (
    <div className={css.field}>
      <label className={css.label}>{label}</label>


      <ReactDatePicker
        selected={field.value}
        onChange={(date: Date| null) => field.onChange(date)}
        dateFormat="dd.MM.yyyy"
        minDate={new Date()}
        placeholderText="Select date"
        className={`${css.input} ${error ? css.inputError : ""}`}
      />

      {error && <p className={css.error}>{error}</p>}
    </div>
  );
}