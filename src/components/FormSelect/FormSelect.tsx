"use client";
import Select from "react-select";
import css from "./FormSelect.module.css";

interface Option {
  value: string;
  label: string;
}

interface formSelectProps {
  label: string;
  options: Option[];
  placeholder: string;
}

export default function FormSelect({
  label,
  options,
  placeholder,
}: formSelectProps) {
  return (
    <div className={css.field}>
      <label className={css.label}>{label}</label>
      <Select
        options={options}
        placeholder={placeholder}
        isSearchable={false}
      />
    </div>
  );
}
