import { usePopup } from "../../../hooks/usePopup";

import styles from "./ShippingDetailsModal.module.scss";

import { CursorImageEffect } from "../../modals/utils/CursorImageEffect/CursorImageEffect";
import { XMark } from "../../modals/utils/XMark/XMark";
import { useShippingDetailsContext } from "../../../contexts/ShippingDetailsContext";
import { ShippingDetails } from "./ShippingDetails/ShippingDetails";

export const ShippingDetailsModal = () => {
  const { isModalOpen, toggleIsModalOpen } = useShippingDetailsContext();

  const { isTransitioning, popupRef, popupCloseHandler } = usePopup({
    toggleIsModalOpen,
    displayModal: isModalOpen,
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
            ref={popupRef}
            className={`${styles["overlay__modal"]}  ${
              isTransitioning
                ? styles["overlay_slide-out"]
                : styles["overlay_slide-in"]
            }`}
          >
            <XMark callbackFunction={popupCloseHandler} />
            <ShippingDetails />
          </div>
        </section>
      )}
    </>
  );
};
