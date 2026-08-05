"use client";

import { useEffect, useState } from "react";
import css from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">

    <button
      className={`${css.button} ${
        isVisible ? css.visible : css.hidden
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑ 
    </button>
    </div>
  );
}