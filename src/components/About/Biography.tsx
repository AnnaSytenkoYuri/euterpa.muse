import Image from "next/image";
import css from "./Biography.module.css";
import { useTranslations } from "next-intl";

export default function Biography() {

  const t = useTranslations("Biography");
  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.contentContainer}>
          <Image
            src="/images/ hero-mob-image2.png"
            alt="Biography"
            width={400}
            height={600}
            className={css.image}
          />
          <div className={css.storyCard}>
            <h3 className={css.upTitle}>{t("upTitle")}</h3>
            <h1 className={css.title}>{t("title")}</h1>

            <p className={css.text}>
            {t("paragraph1")}
            </p>

            <p className={css.text}>
            {t("paragraph2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
