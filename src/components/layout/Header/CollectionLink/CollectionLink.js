import { NavLink } from "react-router-dom";
import { Icon } from "../reusable/Icon/Icon";

import { faGem } from "@fortawesome/free-solid-svg-icons";

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
      <span>Collection</span>
    </NavLink>
  );
};
