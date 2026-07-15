import ModalPortal from "./ModalPortal";
import css from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (isOpen) return null;

  return (
    <ModalPortal>
      <div className={css.overlay}>
        <div className={css.modal}>
          <button type="button" className={css.closeBtn} onClick={onClose}>
            x
          </button>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
}
