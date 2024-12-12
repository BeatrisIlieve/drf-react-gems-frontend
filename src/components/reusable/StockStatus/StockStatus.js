import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./StockStatus.module.scss";

export const StockStatus = ({ isSoldOut }) => {
  return (
    <div className={styles["card_container__quantity"]}>
      <FontAwesomeIcon
        icon={faCircle}
        className={styles["card_container__circle"]}
      />
      {isSoldOut ? "Sold Out" : "In Stock"}
    </div>
  );
};
