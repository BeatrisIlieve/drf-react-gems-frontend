import styles from "./GoBack.module.scss";

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GoBack = ({
  callbackFunction,
  updateContentIsTransitioningHandler,
}) => {
  return (
    <div
      className={styles["circle-left"]}
      onClick={() => updateContentIsTransitioningHandler(-1)}
    >
      <FontAwesomeIcon
        icon={faAngleLeft}
        className={styles["circle-left__icon"]}
        onClick={callbackFunction}
      />
      <span className={styles["circle-left__text"]}>Go Back</span>
    </div>
  );
};
