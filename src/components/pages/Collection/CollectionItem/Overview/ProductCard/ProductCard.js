import { useState, useEffect } from "react";

import { useService } from "../../../../../../hooks/useService";
import { productServiceFactory } from "../../../../../../services/productService";

import styles from "./ProductCard.module.scss";

export const ProductCard = ({ data }) => {
  const productService = useService(productServiceFactory);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    productService
      .getList(data.category_id, data.color_id)
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className={styles["product"]}>
      {product.length > 0 && (
        <div className={styles["product"]}>
          <button className={styles["product__button"]}>
            Discover {product[0].full_category_title}
          </button>
          <div className={styles["product__product"]}>
            <div className={styles["product__stock-info"]}>
              <span className={styles["product__quantity"]}>
                {product[0].min_price} - {product[0].max_price}
              </span>
              <span className={styles["product__price"]}>
                {product[0].is_sold_out}
              </span>
            </div>
            <div className={styles["product__interaction-icons"]}>
              <span className={styles["product__switch-image"]}>switch</span>
              <span className={styles["product__like-product"]}>like</span>
            </div>
            <div className={styles["product__thumbnail"]}>
              <img
                className={styles["product__image"]}
                src={product[0].product__first_image_url}
                alt={`${product[0].full_category_title}-image`}
              />
            </div>
            <div className={styles["product__available-colors"]}>
              <span>images</span>
              <span>images</span>
              <span>images</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
