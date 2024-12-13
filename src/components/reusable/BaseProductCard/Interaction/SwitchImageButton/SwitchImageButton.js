import { SolidCircle } from "./SolidCircle/SolidCircle";
import { RegularCircle } from "./RegularCircle/RegularCircle";

import styles from "./SwitchImageButton.module.scss";

export const SwitchImageButton = ({ firstImageIsActive, clickHandler }) => {
  return (
    <div className={styles["switch-image-button"]}>
      {firstImageIsActive ? (
        <SolidCircle />
      ) : (
        <RegularCircle clickHandler={clickHandler} />
      )}
      {!firstImageIsActive ? (
        <SolidCircle />
      ) : (
        <RegularCircle clickHandler={clickHandler} />
      )}
    </div>
  );
};
