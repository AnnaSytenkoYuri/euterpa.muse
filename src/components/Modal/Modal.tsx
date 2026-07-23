"use client";
import ModalPortal from "./ModalPortal";
import css from "./Modal.module.css";
import { useCallback, useEffect, useRef, useState } from "react";

const ANIMATION_DURATION = 300;

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // const handleClose = useCallback(() => {
  //   if (timeoutRef.current) return;
  //   setIsClosing(true);
  //   timeoutRef.current = setTimeout(() => {
  //     onClose();
  //   }, ANIMATION_DURATION);
  // }, [onClose]);



  const handleClose = useCallback(() => {
    console.log("MODAL CLOSE");
  
    if (timeoutRef.current) return;
  
    setIsClosing(true);
  
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, ANIMATION_DURATION);
  }, [onClose]);



  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      window.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [handleClose]);

  return (
    <ModalPortal>
      <div className={css.overlay} onClick={handleClose}>
        <div
          className={`${css.modal} ${isClosing ? css.closing : ""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          onClick={(e) => e.stopPropagation()}
        >
          <button type="button" className={css.closeBtn} onClick={handleClose}>
            x
          </button>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
}
