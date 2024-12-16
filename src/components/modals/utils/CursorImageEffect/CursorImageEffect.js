import { useState, useEffect } from "react";

import cursorImage from "../../../../assets/images/xmark.png";

import styles from "./CursorImageEffect.module.css";

export const CursorImageEffect = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateCursorPosition);
    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  const imageOffsetX = 20;
  const imageOffsetY = 20;

  return (
    <div className={styles["cursor-container"]}>
      <img
        src={cursorImage}
        alt="cursor image"
        className={styles["cursor-image"]}
        style={{
          transform: `translate(${cursorPos.x - imageOffsetX}px, ${
            cursorPos.y - imageOffsetY
          }px)`,
        }}
      />
    </div>
  );
};
