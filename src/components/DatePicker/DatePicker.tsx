"use client";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import type { ControllerRenderProps } from "react-hook-form";
import type { BookingFormValues } from "../BookingForm/validation";

interface DatePickerProps {
  field: ControllerRenderProps<BookingFormValues, "date">;
  label: string;
  error?: string;
}

export default function DatePicker({
  field,
  label,
  error,
}: DatePickerProps) {
  return (
    <div>
      <label>{label}</label>

      <ReactDatePicker
        selected={field.value}
        onChange={(date: Date| null) => field.onChange(date)}
      />

      {error && <p>{error}</p>}
    </div>
  );
}