import { useTranslations } from "next-intl";
import css from "./HeroSection.module.css";

export default function HeroTatyanaSection() {
  const t = useTranslations("TatyanaHero");
  return (
    <section className={css.heroTatSection}>
      <div className="container">
        <div className={css.content}>
          <h1 className={css.title}>TatYANa</h1>

          <p className={css.text}>
          {t("subtitleLine1")}
            <br />
            {t("subtitleLine2")}
          </p>
        </div>
      </div>
    </section>
  );
}
