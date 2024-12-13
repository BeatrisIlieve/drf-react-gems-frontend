import { useState } from "react";

import { StockInfo } from "./StockInfo/StockInfo";
import { Interaction } from "./Interaction/Interaction";
import { ProductImage } from "./ProductImage/ProductImage";

import styles from "./BaseProductCard.module.scss";

export const BaseProductCard = ({
  minPrice,
  maxPrice,
  isSoldOut,
  categoryTitle,
  colorTitle,
  firstImageUrl,
  secondImageUrl,
  navigateHandler,
  children,
}) => {
  const [firstImageIsActive, setFirstImageIsActive] = useState(true);

  const toggleFirstImageIsActiveHandler = () => {
    setFirstImageIsActive((firstImageIsActive) => !firstImageIsActive);
  };

  return (
    <div className={styles["base-product"]}>
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
      {children}
    </div>
  );
};
