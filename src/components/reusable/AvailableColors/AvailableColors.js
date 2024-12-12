import { useNavigate } from "react-router-dom";

import { slugify } from "../../../utils/slugify";

import { AVAILABLE_COLORS_ITEMS } from "./constants/availableColorsItems";

export const AvailableColors = ({ categoryTitle }) => {
  const navigate = useNavigate();

  const imageClickHandler = (colorTitle) => {
    const slugifiedCategoryTitle = slugify(categoryTitle);

    const slugifiedColorTitle = slugify(colorTitle);

    navigate(`/${slugifiedCategoryTitle}/${slugifiedColorTitle}`);
  };

  return (
    <div>
      {AVAILABLE_COLORS_ITEMS.map((item) => (
        <div key={item.id} onClick={() => imageClickHandler(item.color)}>
          <img src={item.imgUrl} alt="" />
        </div>
      ))}
    </div>
  );
};
