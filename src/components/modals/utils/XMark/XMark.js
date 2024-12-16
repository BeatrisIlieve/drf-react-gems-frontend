import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./XMark.module.css";

export const XMark = ({ callbackFunction }) => {
  return (
    <FontAwesomeIcon
      data-testid="x-mark"
      icon={faXmark}
      className={styles["x-mark"]}
      onClick={callbackFunction}
    />
  );
};
