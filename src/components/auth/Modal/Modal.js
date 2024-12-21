import { useModal } from "../../../hooks/useModal";
import { CursorImageEffect } from "../../common/CursorImageEffect/CursorImageEffect";
import { XMark } from "../../reusable/XMark/XMark";
import { Form } from "../../reusable/Form/Form";

export const Modal = ({ toggleIsModalOpen, isModalOpen }) => {
  const { isTransitioning, modalRef, modalCloseHandler } = useModal({
    toggleIsModalOpen,
    isModalOpen,
  });

  return (
    <section
      className={`${styles["overlay"]}  ${
        displayAuthModal
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
        <Form>
            
        </Form>
      </div>
    </section>
  );
};
