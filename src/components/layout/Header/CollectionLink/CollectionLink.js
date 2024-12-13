import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";

import { COLLECTION_LINK_ITEMS } from "./constants/collectionLinkItems";
import styles from "./CollectionLink.module.scss";

export const CollectionLink = () => {
  return (
    <ul className={styles["collection-link"]} role="list">
      {COLLECTION_LINK_ITEMS.map((item, index) => (
        <li key={index} className={styles["collection-link__item"]}>
          <NavLink
            end
            className={({ isActive }) =>
              `${styles["collection-link__nav"]} ${
                isActive
                  ? styles["collection-link__item_selected"]
                  : styles["collection-link__item_not-selected"]
              }`
            }
            to={item.url}
          >
            <span className={styles["collection-link__label"]}>
              {item.label}
            </span>
          </NavLink>
          {index < 5 && (
            <FontAwesomeIcon
              icon={faGem}
              className={styles["collection-link__icon"]}
            />
          )}
        </li>
      ))}
    </ul>
  );
};
