"use client";
import Link from "next/link";
import css from "./Header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
                    home
                  </Link>
                </li>
                <li className={css.navItem}>
                  <Link href="/about" className={css.navLink} prefetch={false}>
                    About Me
                  </Link>
                </li>
                <li className={css.navItem}>
                  <Link
                    href="/projects"
                    className={css.navLink}
                    prefetch={false}
                  >
                    Projects
                  </Link>
                </li>
                <li className={css.navItem}>
                  <Link href="/vocal" className={css.navLink} prefetch={false}>
                    Vocal
                  </Link>
                </li>
                <li className={css.navItem}>
                  <Link href="/events" className={css.navLink} prefetch={false}>
                    Events
                  </Link>
                </li>
                <li className={css.navItem}>
                  <Link
                    href="/contacts"
                    className={css.navLink}
                    prefetch={false}
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </nav>
            <button className={css.bookBtn}>book lesson</button>
            <div className={css.languages}>
              <span>EN</span>
              <span>|</span>
              <span>DE</span>
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
                stroke-width="1.83333"
                stroke-linecap="round"
              />
              <path
                d="M0.916748 6.41669H16.5001"
                stroke="white"
                stroke-width="1.83333"
                stroke-linecap="round"
              />
              <path
                d="M1.2085 11.9167H16.7918"
                stroke="white"
                stroke-width="1.83333"
                stroke-linecap="round"
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
                    stroke-width="1.83333"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1.12451 12.1442L12.1436 1.12515"
                    stroke="white"
                    stroke-width="1.83333"
                    stroke-linecap="round"
                  />
                </svg>
              </button>

              <div className={css.menuHeader}>
                <h2 className={css.menuTitle}>Menu</h2>
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
                      home
                    </Link>
                  </li>
                  <li className={css.navItem}>
                    <Link
                      href="/about"
                      className={css.navLink}
                      onClick={toggleMenu}
                      prefetch={false}
                    >
                      About Me
                    </Link>
                  </li>
                  <li className={css.navItem}>
                    <Link
                      href="/projects"
                      className={css.navLink}
                      onClick={toggleMenu}
                      prefetch={false}
                    >
                      Projects
                    </Link>
                  </li>
                  <li className={css.navItem}>
                    <Link
                      href="/vocal"
                      className={css.navLink}
                      onClick={toggleMenu}
                      prefetch={false}
                    >
                      Vocal
                    </Link>
                  </li>
                  <li className={css.navItem}>
                    <Link
                      href="/events"
                      className={css.navLink}
                      onClick={toggleMenu}
                      prefetch={false}
                    >
                      Events
                    </Link>
                  </li>
                  <li className={css.navItem}>
                    <Link
                      href="/contacts"
                      className={css.navLink}
                      onClick={toggleMenu}
                      prefetch={false}
                    >
                      Contacts
                    </Link>
                  </li>
                </ul>
              </nav>
              <button className={css.bookBtn}>book lesson</button>
              <div className={css.languages}>
                <span>EN</span>
                <span>|</span>
                <span>DE</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
