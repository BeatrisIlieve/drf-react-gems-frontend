import { Description } from "./Description/Description";
import { ProductCard } from "./ProductCard/ProductCard";

import styles from "./Overview.module.scss"

export const Overview = ({ title, description, products_data }) => {
  return (
    <div>
      <Description title={title} description={description} />
      <div className={styles["product-container"]}>
        {/* {products_data.map((data, index) => (
          <ProductCard key={index} data={data} />
        ))} */}
      </div>
    </div>
  );
};
