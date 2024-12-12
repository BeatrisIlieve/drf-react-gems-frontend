import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";

import styles from "./PriceRange.module.scss";

export const PriceRange = ({ minPrice, maxPrice }) => {
  return (
    <div className={styles["price-range"]}>
      <FontAwesomeIcon icon={faSackDollar} />
      <span className={styles["price-range__amount"]}>
        {minPrice} - {maxPrice}
      </span>
    </div>
  );
};
