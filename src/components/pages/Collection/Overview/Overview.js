import { Description } from "./Description/Description";
import { ProductCard } from "./ProductCard/ProductCard";

import styles from "./Overview.module.scss"

export const Overview = ({ title, description, products_data }) => {
  return (
    <div className={styles["overview"]}>
      <Description title={title} description={description} />
      <div className={styles["overview__product"]}>
        {products_data.map((data, index) => (
          <ProductCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};
