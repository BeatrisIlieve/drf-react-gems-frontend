import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./SolidCircle.module.scss";

export const SolidCircle = () => {
  return <FontAwesomeIcon icon={faCircle} className={styles["icon"]} />;
};
