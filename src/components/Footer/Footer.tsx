import Link from "next/link";
import css from "./Footer.module.css";

export default function Footer() {
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
              <p className={css.footerText}>Your voice - your opportunities</p>

              <h3 className={css.mobContsctsTitle}>contacts</h3>
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
              <ul className={css.mobSocialList}>
                <li className={css.socialItem}>In</li>
                <li className={css.socialsItem}>Fc</li>
                <li className={css.socialsItem}>Sp</li>
                <li className={css.socialsItem}>Yb</li>
              </ul>
              <p className={css.policyText}>Privacy policy</p>
              <p className={css.rightsText}>
                © 2026 Euterpa.muse. All Rights Reserved.
              </p>
            </div>

            {/* Desktop footer */}
            <div className={css.desckFooter}>
              <div className={css.footerTop}>
                <div className={css.footerLeftSide}>
                  <Link href="/" className={css.logo}>
                    <p className={css.logoText}>euterpa.muse</p>
                  </Link>
                  <p className={css.footerText}>
                    Your voice - your opportunities
                  </p>
                  <ul className={css.deskSocialList}>
                    <li className={css.socialItem}>In</li>
                    <li className={css.socialsItem}>Fc</li>
                    <li className={css.socialsItem}>Sp</li>
                    <li className={css.socialsItem}>Yb</li>
                  </ul>
                </div>

                <div className={css.contentDeskWraper}>
                  <div>
                    <h3 className={css.deskContsctsTitle}>menu</h3>
                    <ul className={css.menuList}>
                      <li className={css.listItem}>
                        <Link href="/about" prefetch={false}>
                          About
                        </Link>
                      </li>
                      <li className={css.listItem}>
                        <Link href="/projects">Projects</Link>
                      </li>
                      <li className={css.listItem}>
                        <Link href="/vocal">Vocal</Link>
                      </li>
                      <li className={css.listItem}>
                        <Link href="/concerts">Concerts</Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className={css.deskContsctsTitle}>services</h3>
                    <ul className={css.menuList}>
                      <li className={css.listItem}>
                        <Link href="/">Online lessons</Link>
                      </li>
                      <li className={css.listItem}>
                        <Link href="/">Offline lessons</Link>
                      </li>
                      <li className={css.listItem}>
                        <Link href="/">Preparation for performances</Link>
                      </li>
                      <li className={css.listItem}>
                        <Link href="/">Voice development</Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className={css.deskContsctsTitle}>contacts</h3>
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
                <p className={css.rightsText}>
                  © 2026 Euterpa.muse. All Rights Reserved.
                </p>
                <p className={css.policyText}>Privacy policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
