"use client";
import Select from "react-select";
import css from "./FormSelect.module.css";

interface Option {
  value: string;
  label: string;
}

interface formSelectProps {
  id: string;
  label: string;
  options: Option[];
  placeholder: string;
}

export default function FormSelect({
  id,
  label,
  options,
  placeholder,
}: formSelectProps) {
  return (
    <div className={css.field}>
      <label htmlFor={id} className={css.label}>
        {label}
      </label>
      <Select
        inputId={id}
        options={options}
        placeholder={placeholder}
        isSearchable={false}
        unstyled
        classNames={{
          control: () => css.control,
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
    </div>
  );
}
