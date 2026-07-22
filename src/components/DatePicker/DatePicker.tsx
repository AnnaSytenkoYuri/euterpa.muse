import { ControllerRenderProps } from "react-hook-form";
import css from "./DatePicker.module.css";
import { BookingFormValues } from "../BookingForm/validation";
import { useEffect, useRef } from "react";
import AirDatepicker from "air-datepicker";

import "air-datepicker/air-datepicker.css";
interface DatePickerProps {
  label: string;
  error?: string;

  field: ControllerRenderProps<BookingFormValues, "date">;
}

export default function DatePicker({ label, error, field }: DatePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("effect");
  
    if (!inputRef.current) return;
  
    console.log(inputRef.current);
  
    // const picker = new AirDatepicker(inputRef.current, {
    //   onSelect({ formattedDate }) {
    //     field.onChange(formattedDate);
    //   },
    // });

    const picker = new AirDatepicker(inputRef.current, {
      onShow() {
        console.log("Calendar opened");
      },
    
      onSelect({ formattedDate }) {
        console.log(formattedDate);
        field.onChange(formattedDate);
      },
    });
  
    return () => {
      picker.destroy();
    };
  }, [field]);

  return (
    <div className={css.field}>
      <label className={css.label}>{label}</label>
      <input
        ref={inputRef}
        className={`${css.input} ${error ? css.inputError : ""}`}
        placeholder="Select a date and time"
        readOnly
        // value={field.value}
      />
      {error && <p className={css.error}>{error}</p>}
    </div>
  );
}
