import { useEffect, useState, useRef, useCallback } from "react";

export const useModal = ({ toggleIsModalOpen, isModalOpen }) => {
  const modalRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const modalCloseHandler = useCallback(() => {
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
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        modalCloseHandler();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        modalCloseHandler();
      }
    };

    if (isModalOpen) {
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
  }, [isModalOpen, modalCloseHandler]);

  return {
    isTransitioning,
    modalRef,
    modalCloseHandler,
  };
};
