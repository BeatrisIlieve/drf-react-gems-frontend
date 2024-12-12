import { useNavigate } from "react-router-dom";

import { slugify } from "../../../utils/slugify";

import { AVAILABLE_COLORS_ITEMS } from "./constants/availableColorsItems";

import styles from "./AvailableColors.module.scss";

export const AvailableColors = ({ categoryTitle, colorTitle }) => {
  const navigate = useNavigate();

  const imageClickHandler = (selectedColorTitle) => {
    const slugifiedCategoryTitle = slugify(categoryTitle);

    const slugifiedColorTitle = slugify(selectedColorTitle);

    navigate(`/${slugifiedCategoryTitle}/${slugifiedColorTitle}`);
  };

  return (
    <div className={styles["available-colors"]}>
      {AVAILABLE_COLORS_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => imageClickHandler(item.color)}
          className={`${styles["available-colors__button"]} ${
            colorTitle === item.color
              ? styles["available-colors__button_selected"]
              : ""
          }`.trim()}
        >
          <img
            src={item.imgUrl}
            alt={item.color}
            className={styles["available-colors__image"]}
          />
        </button>
      ))}
    </div>
  );
};
