import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

import styles from "./RegularCircle.module.scss";

export const RegularCircle = ({ clickHandler }) => {
  return (
    <FontAwesomeIcon
      icon={faCircle}
      className={styles["icon"]}
      onClick={clickHandler}
    />
  );
};
