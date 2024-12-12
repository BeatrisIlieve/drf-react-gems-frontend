import { useNavigate } from "react-router-dom";

import { slugify } from "../../../utils/slugify";

import { AVAILABLE_COLORS_ITEMS } from "./constants/availableColorsItems";

import styles from "./AvailableColors.module.scss"

export const AvailableColors = ({ categoryTitle }) => {
  const navigate = useNavigate();

  const imageClickHandler = (colorTitle) => {
    const slugifiedCategoryTitle = slugify(categoryTitle);

    const slugifiedColorTitle = slugify(colorTitle);

    navigate(`/${slugifiedCategoryTitle}/${slugifiedColorTitle}`);
  };

  return (
    <div className={styles["available-colors"]}>
      {AVAILABLE_COLORS_ITEMS.map((item) => (
        <div
          key={item.id}
          onClick={() => imageClickHandler(item.color)}
          className={styles["available-colors__thumbnail"]}
        >
          <img
            src={item.imgUrl}
            alt={item.color}
            className={styles["available-colors__image"]}
          />
        </div>
      ))}
    </div>
  );
};
