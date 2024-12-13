import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./SearchButton.module.scss";

export const SearchButton = () => {
  return (
    <button className={styles["search-button"]}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={styles["search-button__icon"]}
      />
      <span className={styles["search-button__label"]}>Search</span>
    </button>
  );
};
