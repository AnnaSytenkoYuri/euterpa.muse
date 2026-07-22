"use client";
import Select from "react-select";
import css from "./FormSelect.module.css";
import type { ControllerRenderProps } from "react-hook-form";
import type { BookingFormValues } from "../BookingForm/validation";

interface Option {
  value: string;
  label: string;
}

interface formSelectProps {
  id: string;
  label: string;
  options: Option[];
  placeholder: string;
  error: string | undefined;

  field: ControllerRenderProps<
    BookingFormValues,
    "lessonFormat" | "vocalLevel"
  >;
}

export default function FormSelect({
  id,
  label,
  options,
  placeholder,
  field,
  error,
}: formSelectProps) {
  return (
    <div className={css.field}>
      <label htmlFor={id} className={css.label}>
        {label}
      </label>
      <Select
        value={options.find((option) => option.value === field.value)}
        onChange={(selectedOption) =>
          field.onChange(selectedOption?.value ?? "")
        }
        onBlur={field.onBlur}
        inputId={id}
        options={options}
        name={field.name}
        placeholder={placeholder}
        isSearchable={false}
        unstyled
        classNames={{
          control: () => `${css.control} ${error ? css.inputError : "" }`,
          valueContainer: () => css.valueContainer,
          placeholder: () => css.placeholder,
          singleValue: () => css.singleValue,
          menu: () => css.menu,
          option: ({ isFocused, isSelected }) =>
            `${css.option}
            ${isFocused ? css.optionFocused : ""}
            ${isSelected ? css.optionSelected : ""}`,
          indicatorSeparator: () => css.separator,
          dropdownIndicator: () => css.dropdownIndicator,
        }}
      />
      {error && <p className={css.error}>{error}</p>}
    </div>
  );
}
