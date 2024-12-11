import { useState, useEffect } from "react";

import { useService } from "../../../../../../hooks/useService";
import { productServiceFactory } from "../../../../../../services/productService";

export const ProductCard = ({ data }) => {
  const productService = useService(productServiceFactory);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    productService
      .getList(data["category_id"], data["color_id"])
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
    {product && (
        <img src={product[0].product__first_image_url} alt="" />
        // <img></img>
    )}
    </>
    // <div className={styles["collection-item"]}>
    //   <button className={styles["collection-item__button"]}>
    //     Discover {product.category}
    //   </button>
    //   <div className={styles["collection-item__product"]}>
    //     <div className={styles["collection-item__stock-info"]}>
    //       <span className={styles["collection-item__quantity"]}>
    //         {product.quantity}
    //       </span>
    //       <span className={styles["collection-item__price"]}>
    //         {product.price}
    //       </span>
    //     </div>
    //     <div className={styles["collection-item__interaction-icons"]}>
    //       <span className={styles["collection-item__switch-image"]}>
    //         switch
    //       </span>
    //       <span className={styles["collection-item__like-product"]}>like</span>
    //     </div>
    //     <div className={styles["collection-item__thumbnail"]}>
    //       <img
    //         className={styles["collection-item__image"]}
    //         src={product.image}
    //         alt={`${product.category}-image`}
    //       />
    //     </div>
    //     <div className={styles["collection-item__available-colors"]}>
    //       <span>images</span>
    //       <span>images</span>
    //       <span>images</span>
    //     </div>
    //   </div>
    // </div>
  );
};
