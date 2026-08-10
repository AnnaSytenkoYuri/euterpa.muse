import { useTranslations } from "next-intl";
import css from "./AboutSection.module.css";

export default function AboutSection() {
  const t = useTranslations("TatyanaAbout");
  return (
    <section className={css.about}>
      <div className="container">
        <h2 className={css.title}>{t("title")}</h2>

        <div className={css.divider}>
          <span></span>
        </div>

        <p className={css.text}>
        {t("paragraph1")}
        </p>

        <p className={css.text}>
        {t.rich("paragraph2", {
            tetiana: (chunks) => <strong>{chunks}</strong>,
            jan: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>

        <p className={css.text}>
        {t("paragraph3")}
        </p>

        <p className={css.text}>
        {t("paragraph4")}
        </p>

        <p className={css.text}>
        {t("paragraph5")}
        </p>
        <div className={css.divider}>
          <span></span>
        </div>
      </div>
    </section>
  );
}
