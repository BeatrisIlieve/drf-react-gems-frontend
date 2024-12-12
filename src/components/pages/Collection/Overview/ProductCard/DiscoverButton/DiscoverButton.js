import styles from "./DiscoverButton.module.scss";

export const DiscoverButton = ({
  categoryTitle,
  colorTitle,
  fullCategoryTitle,
  clickHandler,
}) => {
  return (
    <button
      className={styles["button"]}
      onClick={() => clickHandler(categoryTitle, colorTitle)}
    >
      Discover {fullCategoryTitle}
    </button>
  );
};
