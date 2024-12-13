import styles from "./ProductImage.module.scss";

export const ProductImage = ({
  categoryTitle,
  colorTitle,
  firstImageUrl,
  secondImageUrl,
  clickHandler,
  firstImageIsActive,
}) => {
  return (
    <div
      onClick={() => clickHandler(categoryTitle, colorTitle)}
      className={styles["product-image"]}
    >
      <img
        src={firstImageIsActive ? firstImageUrl : secondImageUrl}
        alt={`${categoryTitle}-image`}
      />
    </div>
  );
};
