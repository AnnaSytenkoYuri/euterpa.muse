"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../../i18n/navigation";
import css from "./LanguageSwitcher.module.css";

const languages = [
  { locale: "en", label: "EN" },
  { locale: "de", label: "DE" },
  { locale: "uk", label: "UA" },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (newLocale: "en" | "de" | "uk") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className={css.languages}>
      {languages.map((language, index) => (
        <div key={language.locale} className={css.item}>
          <button
            type="button"
            className={`${css.language} ${
              locale === language.locale ? css.active : ""
            }`}
            onClick={() => changeLanguage(language.locale)}
          >
            {language.label}
          </button>

          {index < languages.length - 1 && (
            <span className={css.separator}>|</span>
          )}
        </div>
      ))}
    </div>
  );
}