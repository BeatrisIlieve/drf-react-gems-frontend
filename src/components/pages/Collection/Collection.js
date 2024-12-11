import styles from "./Collection.module.css";
import { CollectionItem } from "./CollectionItem/CollectionItem";

import { HeroImage } from "./CollectionItem/Image/Image";
import { COLLECTION_ITEMS } from "./constants/collectionItems";

export const Collection = () => {
  return (
    <section className={styles["collection"]}>
      {COLLECTION_ITEMS.map((item, index) => (
        <article key={index} className={styles["collection__item"]}>
          <HeroImage imageUrl={item.imageUrl}/>
        </article>
      ))}
    </section>
  );
};
