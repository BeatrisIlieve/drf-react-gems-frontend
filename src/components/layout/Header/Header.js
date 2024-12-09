import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faUser,
  faGem,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";
import { LINK_TITLES } from "./constants/link_titles";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul role="list">
          <li>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "selected" : "not-selected"
              }
              to={"/collection"}
            >
              <FontAwesomeIcon icon={faGem} />
              Collection
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? styles["selected"] : styles["not-selected"]
              }
              to={"/wishlist"}
            >
              <FontAwesomeIcon icon={faHeart} className={styles["icon"]} />
              Wishlist
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? styles["selected"] : styles["not-selected"]
              }
              to={"/shopping-bag"}
            >
              <FontAwesomeIcon
                icon={faBagShopping}
                className={styles["icon"]}
              />
              My Bag
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? styles["selected"] : styles["not-selected"]
              }
              to={"/account"}
            >
              <FontAwesomeIcon icon={faUser} className={styles["icon"]} />
              Account
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
