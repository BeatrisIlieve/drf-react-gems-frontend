import { Icon } from "../reusable/Icon/Icon";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./SearchButton.module.scss";

export const SearchButton = () => {
  return (
    <button className={styles["search-button"]}>
      <Icon icon={faMagnifyingGlass} />
      <span className={styles["label"]}>Search</span>
    </button>
  );
};
