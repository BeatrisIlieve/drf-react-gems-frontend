import { useState } from "react";

export const useToggleIsModalOpen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleIsModalOpen = () => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  return {
    isModalOpen,
    toggleIsModalOpen,
  };
};
