import { useLocale, useTranslations } from "next-intl";
import css from "./EventsSection.module.css";

const events = [
  {
    id: 1,
    date: "2026-12-27",
    title: "HARDY",
    address: "München-Sendling. Kidlerstraße 15 | 81371 München",
    time: "18:00",
    ticketUrl: "https://www.kontramarka.de",
  },
  {
    id: 2,
    date: "2026-11-23",
    title: "TatYANa",
    address: "Bamberg, Germany",
    time: "20:00",
    ticketUrl: "https://www.kontramarka.de",
  },
];

export default function EventsSection() {
  const t = useTranslations("Events");
  const locale = useLocale();

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
          <ul className={css.eventsList}>
            {events.map((event) => {
              const date = new Date(`${event.date}T00:00:00`);

              const day = date.toLocaleDateString(locale, {
                day: "2-digit",
              });

              const month = date.toLocaleDateString(locale, {
                month: "short",
              });

              return (
                <li key={event.id} className={css.eventItem}>
                  <div className={css.eventDate}>
                    <span className={css.eventDay}>{day}</span>
                    <span className={css.eventMonth}>{month}</span>
                  </div>

                  <div className={css.eventInfo}>
                    <h3 className={css.cardTitle}>{event.title}</h3>

                    <p className={css.cardText}>{event.address}</p>

                    <span className={css.cardDetails}>{event.time}</span>
                  </div>

                  <a
                    href={event.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.ticketBtn}
                  >
                    {t("tickets")}
                  </a>
                </li>
              );
            })}
          </ul>
        </ul>
        <button className={css.checkBtnMobile}>{t("checkAll")}</button>
      </div>
    </section>
  );
}
