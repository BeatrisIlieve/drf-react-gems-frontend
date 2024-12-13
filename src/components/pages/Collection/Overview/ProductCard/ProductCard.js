import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useService } from "../../../../../hooks/useService";

import { productServiceFactory } from "../../../../../services/productService";

import { AvailableColors } from "../../../../reusable/AvailableColors/AvailableColors";
import { DiscoverButton } from "./DiscoverButton/DiscoverButton";
import { StockInfo } from "../../../../reusable/StockInfo/StockInfo";
import { Interaction } from "../../../../reusable/Interaction/Interaction";
import { slugify } from "../../../../../utils/slugify";

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

  const [firstImageIsActive, setFirstImageIsActive] = useState(true);

  const toggleFirstImageIsActiveHandler = () => {
    setFirstImageIsActive((firstImageIsActive) => !firstImageIsActive);
  };

  return (
    <>
      {product.length > 0 && (
        <div className={styles["card_container"]}>
          <DiscoverButton
            categoryTitle={product[0].full_category_title}
            colorTitle={product[0].full_color_title}
            fullCategoryTitle={product[0].full_category_title}
            clickHandler={clickHandler}
          />
          <div className={styles["card_container__product"]}>
            <StockInfo
              minPrice={product[0].min_price}
              maxPrice={product[0].max_price}
              isSoldOut={product[0].is_sold_out}
            />
            <Interaction firstImageIsActive={firstImageIsActive} clickHandler={toggleFirstImageIsActiveHandler}/>
            <div
              onClick={() =>
                clickHandler(
                  product[0].full_category_title,
                  product[0].full_color_title
                )
              }
              className={styles["card_container__thumbnail"]}
            >
              <img
                className={styles["card_container__image"]}
                src={product[0].product__first_image_url}
                alt={`${product[0].full_category_title}-image`}
              />
            </div>
            <div className={styles["card_container__materials"]}>
              <AvailableColors
                categoryTitle={product[0].full_category_title}
                colorTitle={product[0].full_color_title}
              />
              <span className={styles["card_container__metal"]}>Platinum</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
