import { useTranslations } from "next-intl";
import css from "./EventsSection.module.css";

export default function EventsSection() {

  const t = useTranslations("Events");

  return (
    <section className={css.eventSection} id="events">
      <div className="container">
        <div className={css.header}>
          <div>
            <p className={css.subTextEvent}>{t("upTitle")}</p>
            <h2 className={css.eventTitle}>{t("title")}</h2>
          </div>
          <button className={css.checkBtn}>{t("checkAll")}</button>
        </div>
        <ul className={css.eventsList}>
          <li className={css.eventItem}>
            <div className={css.eventDate}>
              <span className={css.eventDay}>25</span>
              <span className={css.eventMonth}>{t("months")}</span>
            </div>
            <div className={css.eventInfo}>
              <h3 className={css.cardTitle}>Band At Work</h3>
              <p className={css.cardText}>Ebern. Strasse 546</p>
              <span className={css.cardDetails}>{t("startAt")} 20:30</span>
            </div>
            <button className={css.ticketBtn}>{t("tickets")}</button>
          </li>
          <li className={css.eventItem}>
            <div className={css.eventDate}>
              <span className={css.eventDay}>25</span>
              <span className={css.eventMonth}>{t("months")}</span>
            </div>
            <div className={css.eventInfo}>
              <h3 className={css.cardTitle}>Band At Work</h3>
              <p className={css.cardText}>Ebern. Strasse 546</p>
              <span className={css.cardDetails}>{t("startAt")} 20:30</span>
            </div>
            <button className={css.ticketBtn}>{t("tickets")}</button>
          </li>
          <li className={css.eventItem}>
            <div className={css.eventDate}>
              <span className={css.eventDay}>25</span>
              <span className={css.eventMonth}>{t("months")}</span>
            </div>
            <div className={css.eventInfo}>
              <h3 className={css.cardTitle}>Band At Work</h3>
              <p className={css.cardText}>Ebern. Strasse 546</p>
              <span className={css.cardDetails}>{t("startAt")} 20:30</span>
            </div>
            <button className={css.ticketBtn}>{t("tickets")}</button>
          </li>
          <li className={css.eventItem}>
            <div className={css.eventDate}>
              <span className={css.eventDay}>25</span>
              <span className={css.eventMonth}>{t("months")}</span>
            </div>
            <div className={css.eventInfo}>
              <h3 className={css.cardTitle}>Band At Work</h3>
              <p className={css.cardText}>Ebern. Strasse 546</p>
              <span className={css.cardDetails}>{t("startAt")} 20:30</span>
            </div>
            <button className={css.ticketBtn}>{t("tickets")}</button>
          </li>
        </ul>
        <button className={css.checkBtnMobile}>{t("checkAll")}</button>
      </div>
    </section>
  );
}
