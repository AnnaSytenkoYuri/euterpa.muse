"use client";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalPortalProps {
  children: ReactNode;
}

export default function ModalPortal({ children }: ModalPortalProps) {
  if (typeof window === "undefined") return null;
  return createPortal(children, document.body);
}
