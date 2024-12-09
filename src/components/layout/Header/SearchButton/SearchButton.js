import { Icon } from "../reusable/Icon/Icon";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./SearchButton.module.scss";

export const SearchButton = () => {
  return (
    <div>
      <Icon icon={faMagnifyingGlass} />
      <span>Search</span>
    </div>
  );
};
