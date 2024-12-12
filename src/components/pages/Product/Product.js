import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { deslugify } from "../../../utils/deslugify";
import { slugify } from "../../../utils/slugify";

export const Product = () => {
  const { slugifiedCategoryTitle, slugifiedColorTitle } = useParams();

  const categoryTitle = deslugify(slugifiedCategoryTitle);

  const colorTitle = deslugify(slugifiedColorTitle);
};
