import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useService } from "../../../hooks/useService";
import { productServiceFactory } from "../../../services/productService";

import { deslugify } from "../../../utils/deslugify";
import { slugify } from "../../../utils/slugify";

import { CATEGORY_ID_BY_TITLE } from "./constants/categoryIdByTitle";
import { COLOR_ID_BY_TITLE } from "./constants/colorIdByTitle";

export const Product = () => {
  const { slugifiedCategoryTitle, slugifiedColorTitle } = useParams();

  const categoryTitle = deslugify(slugifiedCategoryTitle);

  const colorTitle = deslugify(slugifiedColorTitle);

  const categoryId = CATEGORY_ID_BY_TITLE[categoryTitle];
  const colorId = COLOR_ID_BY_TITLE[colorTitle];

  const productService = useService(productServiceFactory);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    productService
      .getDetails(categoryId, colorId)
      .then((data) => {

        setProduct(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [categoryId, colorId]);

  return (
<>
{product.length > 0 && (
        <img src={product[0].product__first_image_url} alt="" />
    )}
</>
  )
};
