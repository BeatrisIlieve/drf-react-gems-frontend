import { AvailableColors } from "../../../../../reusable/AvailableColors/AvailableColors";

import styles from "./Materials.module.scss";

export const Materials = ({ categoryTitle, colorTitle }) => {
  return (
    <figcaption className={styles["materials"]}>
      <AvailableColors categoryTitle={categoryTitle} colorTitle={colorTitle} />
      <span className={styles["materials__metal"]}>Platinum</span>
    </figcaption>
  );
};
