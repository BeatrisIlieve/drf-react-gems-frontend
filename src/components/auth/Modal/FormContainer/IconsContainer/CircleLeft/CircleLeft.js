import styles from "./CircleLeft.module.scss";

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CircleLeft = ({ callbackFunction }) => {
  return (
    <div className={styles["circle-left"]}>
      <FontAwesomeIcon
        icon={faAngleLeft}
        className={styles["circle-left__icon"]}
        onClick={callbackFunction}
      />
      <span className={styles["circle-left__text"]}>Go Back</span>
    </div>
  );
};
