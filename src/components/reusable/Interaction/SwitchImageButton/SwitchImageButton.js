import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircle as regularCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as solidCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./SwitchImageButton.module.scss";

export const SwitchImageButton = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={solidCircle}
        className={styles["switch-image-button"]}
      />
      <FontAwesomeIcon
        icon={regularCircle}
        className={styles["switch-image-button"]}
      />
    </div>
  );
};
