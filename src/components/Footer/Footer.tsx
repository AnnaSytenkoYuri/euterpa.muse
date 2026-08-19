import { Link } from "../../../i18n/navigation";
import css from "./Footer.module.css";
import SocialLinks from "../SocialLinks/SocialLinks";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className={css.footer} id="contacts">
      <div className={css.footerBackground}>
        <div className="container">
          <div className={css.footerContentWrapper}>
            {/* Mobile footer */}
            <div className={css.mobileFooter}>
              <Link href="/" className={css.logo}>
                <p className={css.logoText}>euterpa.muse</p>
              </Link>
              <p className={css.footerText}>{t("tagline")}</p>

              <h3 className={css.mobContsctsTitle}>{t("contacts")}</h3>
              <ul className={css.mobContactsList}>
                <li className={css.contactsItem}>
                  <a href="mailto:email@email.com">email@email.com</a>
                </li>
                <li className={css.contactsItem}>
                  <a href="tel:+49 65756344328">+49 65756344328</a>
                </li>
                <li className={css.contactsItem}>
                  <a
                    href="https://maps.google.com/..."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ebern, Strasse 52
                  </a>
                </li>
              </ul>
              <SocialLinks />

              <p className={css.policyText}>
                <Link href="/privacy">
                  <strong>{t("privacyPolicy")}</strong>
                </Link>
                .
              </p>
              <p className={css.rightsText}>{t("rights")}</p>
            </div>

            {/* Desktop footer */}
            <div className={css.desckFooter}>
              <div className={css.footerTop}>
                <div className={css.footerLeftSide}>
                  <Link href="/" className={css.logo}>
                    <p className={css.logoText}>euterpa.muse</p>
                  </Link>
                  <p className={css.footerText}>{t("tagline")}</p>
                  <SocialLinks />
                </div>

                <div className={css.contentDeskWraper}>
                  <div>
                    <h3 className={css.deskContsctsTitle}> {t("menu")}</h3>
                    <ul className={css.menuList}>
                      <li className={css.listItem}>
                        <Link href="/about" prefetch={false}>
                          {t("about")}
                        </Link>
                      </li>
                      <li className={css.listItem}>
                        <Link href="/#projects">{t("projects")}</Link>
                      </li>
                      <li className={css.listItem}>
                        <Link href="/#vocal">{t("vocal")}</Link>
                      </li>
                      <li className={css.listItem}>
                        <Link href="/#events">{t("concerts")}</Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className={css.deskContsctsTitle}>{t("services")}</h3>
                    <ul className={css.menuList}>
                      <li className={css.listItem}>
                        <Link href="/#vocal">{t("onlineLessons")}</Link>
                      </li>
                      <li className={css.listItem}>
                        <Link href="/#vocal">{t("offlineLessons")}</Link>
                      </li>
                      <li className={css.listItem}>
                        <Link href="/#vocal">
                          {t("performancePreparation")}
                        </Link>
                      </li>
                      <li className={css.listItem}>
                        <Link href="/#vocal">{t("voiceDevelopment")}</Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className={css.deskContsctsTitle}>{t("contacts")}</h3>
                    <ul className={css.menuList}>
                      <li className={css.contactsItem}>
                        <a href="mailto:email@email.com">email@email.com</a>
                      </li>
                      <li className={css.contactsItem}>
                        <a href="tel:+49 65756344328">+49 65756344328</a>
                      </li>
                      <li className={css.contactsItem}>
                        <a
                          href="https://maps.google.com/..."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ebern, Strasse 52
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={css.footerBottom}>
                <p className={css.rightsText}>{t("rights")}</p>

                <p className={css.policyText}>
                  <Link href="/privacy">
                    <strong>{t("privacyPolicy")}</strong>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
