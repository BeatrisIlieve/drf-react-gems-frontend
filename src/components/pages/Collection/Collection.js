import styles from "./Collection.module.css";
import { CollectionItem } from "./CollectionItem/CollectionItem";

export const Collection = () => {

  return (
    <section className={styles["collection"]}>
      <article>
        <div className={styles["collection-image"]}>
          <img
            src="https://res.cloudinary.com/deztgvefu/image/upload/v1726330964/forget-me-not-collection/miniImages/hero-mobile_k83pfc.jpg"
            alt="forget-me-not-collection"
          />
        </div>
        <div className={styles["collection-info"]}>
          <div className={styles["text-container"]}>
            <h2>Forget-Me-Not Collection</h2>
            <p>
              A series of fine jewelry designs that celebrate the endless beauty
              of nature’s greatest gifts – rare gemstones and flowers in bloom.
            </p>
          </div>
          <div className={styles["product-container"]}>
            <CollectionItem product={products[0]} />
            <CollectionItem product={products[1]} />
          </div>
        </div>
      </article>
    </section>
  );
};
