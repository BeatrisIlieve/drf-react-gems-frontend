import { useState } from "react";

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
  const wishlistCount = 2;

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
          <li>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "selected" : "not-selected"
              }
              to={"/wishlist"}
            >
              <div>
                <FontAwesomeIcon icon={faHeart} />
                <span>{wishlistCount}</span>
              </div>
              Wishlist
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "selected" : "not-selected"
              }
              to={"/shopping-bag"}
            >
              <FontAwesomeIcon icon={faBagShopping} />
              My Bag
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "selected" : "not-selected"
              }
              to={"/account"}
            >
              <FontAwesomeIcon icon={faUser} />
              Account
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
