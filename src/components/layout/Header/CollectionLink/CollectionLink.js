import { NavLink } from "react-router-dom";
import styles from "./CollectionLink.module.scss";

export const CollectionLink = ({ label, url }) => {
  return (
    <NavLink
      end
      className={({ isActive }) =>
        `${styles["link"]} ${
          isActive ? styles["selected"] : styles["not-selected"]
        }`
      }
      to={url}
    >
      <span className={styles["label"]}>{label}</span>
    </NavLink>
  );
};
