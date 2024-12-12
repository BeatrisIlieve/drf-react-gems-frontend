import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Icon.module.scss";

export const Icon = ({ icon, color }) => {
  return (
    <span className={styles["icon-span"]}>
      <FontAwesomeIcon icon={icon} />
    </span>
  );
};
