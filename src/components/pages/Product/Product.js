import { useState, useEffect } from "react";

import { useService } from "../../../hooks/useService"
import { productServiceFactory } from "../../../services/productService";

export const Product = () => {
    const productService = useService(productServiceFactory);

    const [products, setProducts] = useState([]);

    const categoryId = 1;
    const colorId = 1;
  
    useEffect(() => {
      productService
        .getDetails(categoryId, colorId)
        .then((data) => {
          console.log(data);
          setProducts(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);
  return (
    <ul>
    {products.map((item) => (
      <>
        <li key={item.id}>
            <img src={item.first_image_url} alt="" />
        </li>
      </>
    ))}
  </ul>
  )
}