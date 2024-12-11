import styles from "./CollectionItem.module.scss";

export const CollectionItem = ({ product }) => {
  return (
    <div className={styles["collection-item"]}>
      <button className={styles["collection-item__button"]}>
        Discover {product.category}
      </button>
      <div className={styles["collection-item__stock-info"]}>
        <span className={styles["collection-item__quantity"]}>
          {product.quantity}
        </span>
        <span className={styles["collection-item__price"]}>
          {product.price}
        </span>
      </div>
      <div className={styles["collection-item__thumbnail"]}>
        <img
          className={styles["collection-item__image"]}
          src={product.image}
          alt={`${product.category}-image`}
        />
      </div>
      <div className={styles["collection-item__available-colors"]}>images</div>
    </div>
  );
};
