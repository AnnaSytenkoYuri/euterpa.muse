"use client";
import Link from "next/link";
import css from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
                <Link href="/projects" className={css.navLink} prefetch={false}>
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
                <Link href="/contacts" className={css.navLink} prefetch={false}>
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

          {/* Burger */}
          <button className={css.burgerBtn} onClick={toggleMenu}>
            <svg
              width="16"
              height="11"
              viewBox="0 0 346 32"
              aria-hidden="true"
            >
              <use href="/sprite.svg#burgerBtn" />
            </svg>
          </button>

          {/* Mobile Menu */}

          {isOpen && (
            <div className={css.mobileMenu}>
              <button className={css.closeBtn} onClick={toggleMenu}>
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 346 32"
                  aria-hidden="true"
                >
                  <use href="/sprite.svg#close-btn" />
                </svg>
              </button>
              <span className={css.divider} />
              <h2 className={css.menuTitle}>Menu</h2>
              <span className={css.divider} aria-hidden="true" />

              <nav>
                <ul className={css.mobileNavList}>
                  <li className={css.navItem}>
                    <Link href="/" className={css.navLink} prefetch={false}>
                      home
                    </Link>
                    <span className={css.divider} aria-hidden="true" />
                  </li>
                  <li className={css.navItem}>
                    <Link
                      href="/about"
                      className={css.navLink}
                      prefetch={false}
                    >
                      About Me
                    </Link>
                    <span className={css.divider} aria-hidden="true" />
                  </li>
                  <li className={css.navItem}>
                    <Link
                      href="/projects"
                      className={css.navLink}
                      prefetch={false}
                    >
                      Projects
                    </Link>
                    <span className={css.divider} aria-hidden="true" />
                  </li>
                  <li className={css.navItem}>
                    <Link
                      href="/vocal"
                      className={css.navLink}
                      prefetch={false}
                    >
                      Vocal
                    </Link>
                    <span className={css.divider} aria-hidden="true" />
                  </li>
                  <li className={css.navItem}>
                    <Link
                      href="/events"
                      className={css.navLink}
                      prefetch={false}
                    >
                      Events
                    </Link>
                    <span className={css.divider} aria-hidden="true" />
                  </li>
                  <li className={css.navItem}>
                    <Link
                      href="/contacts"
                      className={css.navLink}
                      prefetch={false}
                    >
                      Contacts
                    </Link>
                    <span className={css.divider} aria-hidden="true" />
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
