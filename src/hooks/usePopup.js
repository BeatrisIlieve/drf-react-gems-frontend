import { useEffect, useState, useRef, useCallback } from "react";

export const usePopup = ({ toggleIsModalOpen, displayModal }) => {
  const popupRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const popupCloseHandler = useCallback(() => {
    return new Promise((resolve) => {
      setIsTransitioning(true);

      setTimeout(() => {
        toggleIsModalOpen();
        setIsTransitioning(false);
        resolve();
      }, 400);
    });
  }, [toggleIsModalOpen]);

  useEffect(() => {
    console.log(displayModal);
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        popupCloseHandler();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        popupCloseHandler();
      }
    };

    if (displayModal) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [displayModal, popupCloseHandler]);

  return {
    isTransitioning,
    popupRef,
    popupCloseHandler,
  };
};
