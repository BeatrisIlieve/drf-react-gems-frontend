import styles from "./Collection.module.scss";

import { Image } from "./CollectionItem/Image/Image";
import { Overview } from "./CollectionItem/Overview/Overview";
import { COLLECTION_ITEMS } from "./constants/collectionItems";

export const Collection = () => {
  return (
    <section className={styles["collection"]}>
      {COLLECTION_ITEMS.map((item, index) => (
        <article key={index} className={styles["collection__item"]}>
          <Image imageUrl={item.imageUrl} />
          <Overview
            title={item.title}
            description={item.description}
            products_data={item.products_data}
          />
        </article>
      ))}
    </section>
  );
};
