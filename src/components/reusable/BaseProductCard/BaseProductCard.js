import { useState } from "react";

import { StockInfo } from "./StockInfo/StockInfo";
import { Interaction } from "./Interaction/Interaction";
import { ProductImage } from "./ProductImage/ProductImage";
import { AvailableColors } from "../AvailableColors/AvailableColors";
import styles from "./BaseProductCard.module.scss"
export const BaseProductCard = ({
  minPrice,
  maxPrice,
  isSoldOut,
  categoryTitle,
  colorTitle,
  firstImageUrl,
  secondImageUrl,
  navigateHandler,
}) => {
  const [firstImageIsActive, setFirstImageIsActive] = useState(true);

  const toggleFirstImageIsActiveHandler = () => {
    setFirstImageIsActive((firstImageIsActive) => !firstImageIsActive);
  };

  return (
    <div className={styles["card_container__product"]}>
      <StockInfo
        minPrice={minPrice}
        maxPrice={maxPrice}
        isSoldOut={isSoldOut}
      />
      <Interaction
        firstImageIsActive={firstImageIsActive}
        clickHandler={toggleFirstImageIsActiveHandler}
      />
      <ProductImage
        categoryTitle={categoryTitle}
        colorTitle={colorTitle}
        firstImageUrl={firstImageUrl}
        secondImageUrl={secondImageUrl}
        clickHandler={navigateHandler}
        firstImageIsActive={firstImageIsActive}
      />
      <div className={styles["card_container__materials"]}>
        <AvailableColors
          categoryTitle={categoryTitle}
          colorTitle={colorTitle}
        />
        <span className={styles["card_container__metal"]}>Platinum</span>
      </div>
    </div>
  );
};
