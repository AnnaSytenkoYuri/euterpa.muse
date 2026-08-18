import { getTranslations } from "next-intl/server";
import css from "./Privacy.module.css";
import { Metadata } from "next";


export async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }): Promise<Metadata> {
    const { locale } = await params;
  
    const t = await getTranslations({
      locale,
      namespace: "PrivacyPolicy.meta",
    });
  
    return {
      title: t("title"),
      description: t("description"),
    };
  }

export default async function PrivacyPage() {
  const t = await getTranslations("PrivacyPolicy");
  return (
    <main className={css.main}>
      <section className={css.section}>
        <div className="container">
          <div className={css.content}>
            <h1 className={css.title}>{t("title")}</h1>

            <p className={css.intro}>{t("intro")}</p>

            <div className={css.divider} />

            <h2 className={css.subTitle}>{t("controller.title")}</h2>

            <p className={css.text}>{t("controller.description")}</p>

            <p className={css.text}>
              Tetyana Makarova
              <br />
              Germany
              <br />
              Email: tetyana.mak@icloud.com
            </p>

            <h2 className={css.subTitle}>{t("data.title")}</h2>

            <p className={css.text}>{t("data.description")}</p>

            <ul className={css.list}>
              <li>{t("data.name")}</li>
              <li>{t("data.email")}</li>
              <li>{t("data.phone")}</li>
              <li>{t("data.lessonFormat")}</li>
              <li>{t("data.vocalLevel")}</li>
              <li>{t("data.dateTime")}</li>
              <li>{t("data.message")}</li>
            </ul>

            <h2 className={css.subTitle}>{t("purpose.title")}</h2>

            <p className={css.text}>{t("purpose.text")}</p>

            <h2>{t("resend.title")}</h2>

            <p className={css.text}>{t("resend.text")}</p>

            <h2 className={css.subTitle}>{t("vercel.title")}</h2>

            <p className={css.text}>{t("vercel.text")}</p>

            <h2 className={css.subTitle}>{t("youtube.title")}</h2>

            <p className={css.text}>{t("youtube.text")}</p>

            <h2 className={css.subTitle}>{t("retention.title")}</h2>

            <p className={css.text}>{t("retention.text")}</p>

            <h2 className={css.subTitle}>{t("rights.title")}</h2>

            <p className={css.text}>{t("rights.text")}</p>

            <h2 className={css.subTitle}>{t("contact.title")}</h2>

            <p className={css.text}>{t("contact.text")}</p>

            <p className={css.text}>
              Tetyana Makarova
              <br />
              Email: tetyana.mak@icloud.com
            </p>

            <p className={css.text}>{t("updated")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
