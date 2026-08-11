import { useTranslations } from "next-intl";
import css from "./VideoSection.module.css";

export default function VideoSection() {
  const t = useTranslations("VideoSection");

  return (
        <div className={css.video}>
        <p className={css.upTitle}>{t("upTitle")}</p>
        <h2 className={css.title}>
        {t("titleLine1")}
          <br />
          {t("titleLine2")}
        </h2>
        <div className={css.videoWrapper}>
          <iframe
            src="https://www.youtube.com/embed/Z-bnKFFji-U?si=YgLVMRj2kVsH8Bs-"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <a
          href="https://www.youtube.com/@oknetyS"
          target="_blank"
          rel="noopener noreferrer"
          className={css.link}
        >
          <span>{t("watchMore")}</span>
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.1 9.5L11.5 5L7.1 0.5M11.5 5H0.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        </div>
  );
}
