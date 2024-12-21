import { useModal } from "../../../hooks/useModal";

import styles from "./ShippingDetailsModal.module.scss";

import { CursorImageEffect } from "../CursorImageEffect/CursorImageEffect";
import { XMark } from "../../reusable/XMark/XMark";
import { ShippingDetails } from "./ShippingDetails/ShippingDetails";

export const ShippingDetailsModal = ({ isModalOpen, toggleIsModalOpen }) => {
  const { isTransitioning, modalRef, modalCloseHandler } = useModal({
    toggleIsModalOpen,
    isModalOpen,
  });

  return (
    <>
      {isModalOpen && (
        <section
          className={`${styles["overlay"]}  ${
            isModalOpen
              ? styles["overlay_transition-in"]
              : styles["overlay_transition-out"]
          }`}
        >
          <CursorImageEffect />
          <div
            ref={modalRef}
            className={`${styles["overlay__modal"]}  ${
              isTransitioning
                ? styles["overlay_slide-out"]
                : styles["overlay_slide-in"]
            }`}
          >
            <XMark callbackFunction={modalCloseHandler} />
            <ShippingDetails toggleIsModalOpen={toggleIsModalOpen} />
          </div>
        </section>
      )}
    </>
  );
};
