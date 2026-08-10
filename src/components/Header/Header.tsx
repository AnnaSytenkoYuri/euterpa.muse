"use client";
import { Link } from "../../../i18n/navigation";
import css from "./Header.module.css";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import BookingForm from "../BookingForm/BookingForm";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const t = useTranslations("Header");

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
    <header className={css.header}>
      <div className="container">
        <div className={css.headerContainer}>
          <Link href="/" className={css.logo}>
            <p className={css.logoText}>euterpa.muse</p>
          </Link>

          {/* Desktop nav */}
          <div className={css.rightSide}>
            <nav className={css.desktopNav}>
              <ul className={css.navList}>
                <li className={css.navItem}>
                  <Link href="/" className={css.navLink} prefetch={false}>
                  {t("home")}
                  </Link>
                </li>
                <li className={css.navItem}>
                  <Link href="/about" className={css.navLink} prefetch={false}>
                  {t("about")}
                  </Link>
                </li>
                <li className={css.navItem}>
                  <Link
                    href="/#projects"
                    className={css.navLink}
                    prefetch={false}
                  >
                   {t("projects")}
                  </Link>
                </li>
                <li className={css.navItem}>
                  <Link href="/#vocal" className={css.navLink} prefetch={false}>
                   {t("vocal")}
                  </Link>
                </li>
                <li className={css.navItem}>
                  <Link href="/#events" className={css.navLink} prefetch={false}>
                  {t("events")}
                  </Link>
                </li>
                <li className={css.navItem}>
                  <Link
                    href="/#contacts"
                    className={css.navLink}
                    prefetch={false}
                  >
                    {t("contacts")}
                  </Link>
                </li>
              </ul>
            </nav>
            <button className={css.bookBtn} onClick={() => setIsModalOpen(true)}>{t("bookLesson")}</button>
            <div className={css.languages}>
            <LanguageSwitcher />
            </div>
          </div>

          {/* Burger */}
          <button className={css.burgerBtn} onClick={toggleMenu}>
            <svg
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.916748 0.916687H16.5001"
                stroke="white"
                strokeWidth="1.83333"
                strokeLinecap="round"
              />
              <path
                d="M0.916748 6.41669H16.5001"
                stroke="white"
                strokeWidth="1.83333"
                strokeLinecap="round"
              />
              <path
                d="M1.2085 11.9167H16.7918"
                stroke="white"
                strokeWidth="1.83333"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Mobile Menu */}

          {isOpen && (
            <div className={css.mobileMenu}>
              <button className={css.closeBtn} onClick={toggleMenu}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.916748 0.916687L11.9358 11.9358"
                    stroke="white"
                    strokeWidth="1.83333"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1.12451 12.1442L12.1436 1.12515"
                    stroke="white"
                    strokeWidth="1.83333"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <div className={css.menuHeader}>
                <h2 className={css.menuTitle}>{t("menu")}</h2>
              </div>

              <nav>
                <ul className={css.mobileNavList}>
                  <li className={css.navItem}>
                    <Link
                      href="/"
                      className={css.navLink}
                      onClick={toggleMenu}
                      prefetch={false}
                    >
                      {t("home")}
                    </Link>
                  </li>
                  <li className={css.navItem}>
                    <Link
                      href="/about"
                      className={css.navLink}
                      onClick={toggleMenu}
                      prefetch={false}
                    >
                      {t("about")}
                    </Link>
                  </li>
                  <li className={css.navItem}>
                    <Link
                      href="/#projects"
                      className={css.navLink}
                      onClick={toggleMenu}
                      prefetch={false}
                    >
                      {t("projects")}
                    </Link>
                  </li>
                  <li className={css.navItem}>
                    <Link
                      href="/#vocal"
                      className={css.navLink}
                      onClick={toggleMenu}
                      prefetch={false}
                    >
                      {t("vocal")}
                    </Link>
                  </li>
                  <li className={css.navItem}>
                    <Link
                      href="/#events"
                      className={css.navLink}
                      onClick={toggleMenu}
                      prefetch={false}
                    >
                      {t("events")}
                    </Link>
                  </li>
                  <li className={css.navItem}>
                    <Link
                      href="/#contacts"
                      className={css.navLink}
                      onClick={toggleMenu}
                      prefetch={false}
                    >
                      {t("contacts")}
                    </Link>
                  </li>
                </ul>
              </nav>
              <button className={css.bookBtn} onClick={() => {setIsModalOpen(true); setIsOpen(false)}}>{t("bookLesson")}</button>
              <div className={css.languages}>
              <LanguageSwitcher />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
       {isModalOpen && (
            <Modal onClose={closeModal}>
              <BookingForm onClose={closeModal}/>
            </Modal>
          )}
          </>
  );
}
