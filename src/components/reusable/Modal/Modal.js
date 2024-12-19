import { usePopup } from "../../../hooks/usePopup";

import styles from "./Modal.module.scss";

import { CursorImageEffect } from "../../modals/utils/CursorImageEffect/CursorImageEffect";
import { XMark } from "../../modals/utils/XMark/XMark";

export const Modal = ({ closeModalClickHandler, displayModal, children }) => {
  const { isTransitioning, popupRef, popupCloseHandler } = usePopup({
    closeModalClickHandler,
    displayModal,
  });

  return (
    <section
      className={`${styles["overlay"]}  ${
        displayModal
          ? styles["overlay_transition-in"]
          : styles["overlay_transition-out"]
      }`}
    >
      <CursorImageEffect />
      <div
        ref={popupRef}
        className={`${styles["overlay__modal"]}  ${
          isTransitioning
            ? styles["overlay_slide-out"]
            : styles["overlay_slide-in"]
        }`}
      >
        <XMark callbackFunction={popupCloseHandler} />
        {children}
      </div>
    </section>
  );
};
