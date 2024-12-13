import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircle as regularCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as solidCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./SwitchImageButton.module.scss";

export const SwitchImageButton = ({ firstImageIsActive, clickHandler }) => {
  return (
    <div className={styles["switch-image-button"]}>
      {firstImageIsActive ? (
        <FontAwesomeIcon
          icon={solidCircle}
          className={styles["switch-image-button__icon"]}
        />
      ) : (
        <FontAwesomeIcon
          icon={regularCircle}
          className={styles["switch-image-button__icon"]}
          onClick={clickHandler}
        />
      )}
      {!firstImageIsActive ? (
        <FontAwesomeIcon
          icon={solidCircle}
          className={styles["switch-image-button__icon"]}
        />
      ) : (
        <FontAwesomeIcon
          icon={regularCircle}
          className={styles["switch-image-button__icon"]}
          onClick={clickHandler}
        />
      )}
    </div>
  );
};
