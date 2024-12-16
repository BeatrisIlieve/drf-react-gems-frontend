import { useEffect, useState, useRef, useCallback } from "react";

export const usePopup = ({ closeAuthModalClickHandler, displayAuthModal }) => {
  const popupRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const popupCloseHandler = useCallback(() => {
    return new Promise((resolve) => {
      setIsTransitioning(true);

      setTimeout(() => {
        closeAuthModalClickHandler();
        setIsTransitioning(false);
        resolve();
      }, 400);
    });
  }, [closeAuthModalClickHandler]);

  useEffect(() => {
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

    if (displayAuthModal) {
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
  }, [displayAuthModal, popupCloseHandler]);

  const updateIsTransitioningHandler = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  return {
    isTransitioning,
    popupRef,
    popupCloseHandler,
    updateIsTransitioningHandler,
  };
};
