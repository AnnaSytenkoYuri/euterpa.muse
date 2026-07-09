import css from "./EventsSection.module.css";

export default function EventsSection() {
  return (
    <section className={css.eventSection}>
      <div className="container">
        <p className={css.subTextEvent}>concerts</p>
        <h2 className={css.eventTitle}>Upcoming events</h2>
        <ul className={css.eventsList}>
          <li className={css.eventItem}>
            <div className={css.eventDate}>
              <span className={css.eventDay}>25</span>
              <span className={css.eventMonth}>Sep</span>
            </div>
            <div className={css.eventInfo}>
              <h3 className={css.cardTitle}>Band At Work</h3>
              <p className={css.cardText}>Ebern. Strasse 546</p>
              <span className={css.cardDetails}>Start at 20:30</span>
            </div>
            <button className={css.ticketBtn}>Tickets</button>
          </li>
          <li className={css.eventItem}>
            <div className={css.eventDate}>
              <span className={css.eventDay}>25</span>
              <span className={css.eventMonth}>Sep</span>
            </div>
            <div className={css.eventInfo}>
              <h3 className={css.cardTitle}>Band At Work</h3>
              <p className={css.cardText}>Ebern. Strasse 546</p>
              <span className={css.cardDetails}>Start at 20:30</span>
            </div>
            <button className={css.ticketBtn}>Tickets</button>
          </li>
          <li className={css.eventItem}>
            <div className={css.eventDate}>
              <span className={css.eventDay}>25</span>
              <span className={css.eventMonth}>Sep</span>
            </div>
            <div className={css.eventInfo}>
              <h3 className={css.cardTitle}>Band At Work</h3>
              <p className={css.cardText}>Ebern. Strasse 546</p>
              <span className={css.cardDetails}>Start at 20:30</span>
            </div>
            <button className={css.ticketBtn}>Tickets</button>
          </li>
          <li className={css.eventItem}>
            <div className={css.eventDate}>
              <span className={css.eventDay}>25</span>
              <span className={css.eventMonth}>Sep</span>
            </div>
            <div className={css.eventInfo}>
              <h3 className={css.cardTitle}>Band At Work</h3>
              <p className={css.cardText}>Ebern. Strasse 546</p>
              <span className={css.cardDetails}>Start at 20:30</span>
            </div>
            <button className={css.ticketBtn}>Tickets</button>
          </li>
        </ul>
        <button className={css.checkBtn}>Check all</button>
      </div>
    </section>
  );
}
