export const Overview = ({ title, description, products }) => {
  return (
    <div>
      <div className={styles["text-container"]}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles["product-container"]}>
        {products.map((product) => (
          <CollectionItem product={products[0]} key={product.product_id} />
        ))}
      </div>
    </div>
  );
};
