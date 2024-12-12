import { StockStatus } from "../../../../../reusable/StockStatus/StockStatus";
import { PriceRange } from "../../../../../reusable/PriceRange/PriceRange";

import styles from "./StockInfo.module.scss";

export const StockInfo = ({ minPrice, maxPrice, isSoldOut }) => {
  return (
    <div className={styles["card_container__stock-info"]}>
      <PriceRange minPrice={minPrice} maxPrice={maxPrice} />
      <StockStatus isSoldOut={isSoldOut} />
    </div>
  );
};
