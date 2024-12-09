import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBagShopping,
    faUser,
    faGem,
    faHeart,
  } from "@fortawesome/free-solid-svg-icons";

import { LINK_TITLES } from "./constants/link_titles";

export const Header = () => {
  return (
    <header className={styles["main-header"]}>
      <ul role="list">
        <li>
          <NavLink
            end
            className={({ isActive }) =>
              isActive ? styles["selected"] : styles["not-selected"]
            }
            to={to}
          >
            <FontAwesomeIcon icon={faGem} className={styles["icon"]} />
            Collection
          </NavLink>
        </li>
        <li>Wishlist</li>
        <li>My Bag</li>
        <li>Account</li>
      </ul>
    </header>
  );
};
