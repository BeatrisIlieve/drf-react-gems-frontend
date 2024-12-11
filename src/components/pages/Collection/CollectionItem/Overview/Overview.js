import { Description } from "./Description/Description";

export const Overview = ({ title, description, products }) => {
  return (
    <div>
      <Description title={title} description={description} />
      <div className={styles["product-container"]}>
        {products.map((product) => (
          <CollectionItem product={product} key={product.product_id} />
        ))}
      </div>
    </div>
  );
};
