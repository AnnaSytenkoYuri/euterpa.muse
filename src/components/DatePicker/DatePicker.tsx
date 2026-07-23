import { ControllerRenderProps } from "react-hook-form";
import css from "./DatePicker.module.css";
import { BookingFormValues } from "../BookingForm/validation";
import { useRef } from "react";

interface DatePickerProps {
  label: string;
  error?: string;

  field: ControllerRenderProps<BookingFormValues, "date">;
}

export default function DatePicker({ label, error, field }: DatePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  
  //   if (!inputRef.current) return;

    // const picker = new AirDatepicker(inputRef.current, {    
    //   onSelect({ formattedDate }) {
    //     console.log(formattedDate);
    //     field.onChange(formattedDate);
    //   },
    // });


  //   const picker = new Date(inputRef.current, {
    
  //     onSelect({ formattedDate }) {
  //       console.log(formattedDate);
  //       field.onChange(formattedDate);
  //     },
  //   });
  
  // }, [field.onChange]);


  return (
    <div className={css.field}>
      <label className={css.label}>{label}</label>
      <input
      type="text"
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
