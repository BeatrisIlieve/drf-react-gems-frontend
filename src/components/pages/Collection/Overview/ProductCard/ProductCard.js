import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useService } from "../../../../../hooks/useService";

import { productServiceFactory } from "../../../../../services/productService";

import { DiscoverButton } from "./DiscoverButton/DiscoverButton";
import { BaseProductCard } from "../../../../reusable/BaseProductCard/BaseProductCard";
import { Materials } from "./Materials/Materials";

import { slugify } from "../../../../../utils/slugify";

import styles from "./ProductCard.module.scss";

export const ProductCard = ({ data }) => {
  const navigate = useNavigate();

  const productService = useService(productServiceFactory);

  const [product, setProduct] = useState([]);

  const navigateHandler = (categoryTitle, colorTitle) => {
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
    <>
      {product.length > 0 && (
        <div className={styles["product-card-container"]}>
          <DiscoverButton
            categoryTitle={product[0].full_category_title}
            colorTitle={product[0].full_color_title}
            fullCategoryTitle={product[0].full_category_title}
            clickHandler={navigateHandler}
          />
          <BaseProductCard
            minPrice={product[0].min_price}
            maxPrice={product[0].max_price}
            isSoldOut={product[0].is_sold_out}
            categoryTitle={product[0].full_category_title}
            colorTitle={product[0].full_color_title}
            firstImageUrl={product[0].product__first_image_url}
            secondImageUrl={product[0].product__second_image_url}
            navigateHandler={navigateHandler}
          >
            <Materials
              categoryTitle={product[0].full_category_title}
              colorTitle={product[0].full_color_title}
            />
          </BaseProductCard>
        </div>
      )}
    </>
  );
};
