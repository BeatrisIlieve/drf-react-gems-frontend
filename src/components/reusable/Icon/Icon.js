import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Icon.module.scss";

export const Icon = ({ icon }) => {
  return <FontAwesomeIcon icon={icon} className={styles["icon-span"]} />;
};
