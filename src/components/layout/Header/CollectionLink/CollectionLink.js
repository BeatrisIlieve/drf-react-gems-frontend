import { NavLink } from "react-router-dom";
import { Icon } from "../reusable/Icon/Icon";

import { faGem } from "@fortawesome/free-solid-svg-icons";

import styles from "./CollectionLink.module.scss"

export const CollectionLink = () => {
  return (
    <NavLink
      end
      className={({ isActive }) =>
        isActive ? styles["selected"] : styles["not-selected"]
      }
      to={"/collection"}
    >
      <Icon icon={faGem} />
      <span className={styles["label"]}>Collection</span>
    </NavLink>
  );
};
