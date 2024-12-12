import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useService } from "../../../../../hooks/useService";
import { productServiceFactory } from "../../../../../services/productService";
import { AvailableColors } from "../../../../reusable/AvailableColors/AvailableColors";
import { DiscoverButton } from "./DiscoverButton/DiscoverButton";
import { slugify } from "../../../../../utils/slugify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./ProductCard.module.scss";

export const ProductCard = ({ data }) => {
  const navigate = useNavigate();

  const productService = useService(productServiceFactory);

  const [product, setProduct] = useState([]);

  const clickHandler = (categoryTitle, colorTitle) => {
    const slugifiedCategoryTitle = slugify(categoryTitle);

    const slugifiedColorTitle = slugify(colorTitle);

    navigate(`/${slugifiedCategoryTitle}/${slugifiedColorTitle}`);
  };

  useEffect(() => {
    productService
      .getList(data.category_id, data.color_id)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className={styles["product_card"]}>
      {product.length > 0 && (
        <div className={styles["product_card"]}>
          <DiscoverButton
            categoryTitle={product[0].full_category_title}
            colorTitle={product[0].full_color_title}
            fullCategoryTitle={product[0].full_category_title}
            clickHandler={clickHandler}
          />
          <div className={styles["product_card__product"]}>
            <div className={styles["product_card__stock-info"]}>
              <div className={styles["product_card__price"]}>
                <FontAwesomeIcon icon={faSackDollar} />
                <span className={styles["product_card__amount"]}>
                  {product[0].max_price} - {product[0].min_price}
                </span>
              </div>
              <span className={styles["product_card__quantity"]}>
                <FontAwesomeIcon
                  icon={faCircle}
                  className={styles["product_card__circle"]}
                />
                {product[0].is_sold_out ? "Sold Out" : "In Stock"}
              </span>
            </div>
            <div className={styles["product_card__interaction-icons"]}>
              <span className={styles["product_card__switch-image"]}>
                switch
              </span>
              <span className={styles["product_card__like-product"]}>like</span>
            </div>
            <div
              onClick={() =>
                clickHandler(
                  product[0].full_category_title,
                  product[0].full_color_title
                )
              }
              className={styles["product_card__thumbnail"]}
            >
              <img
                className={styles["product_card__image"]}
                src={product[0].product__first_image_url}
                alt={`${product[0].full_category_title}-image`}
              />
            </div>
            <div className={styles["product_card__materials"]}>
              <AvailableColors
                categoryTitle={product[0].full_category_title}
                colorTitle={product[0].full_color_title}
              />
              <span className={styles["product_card__metal"]}>Platinum</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
