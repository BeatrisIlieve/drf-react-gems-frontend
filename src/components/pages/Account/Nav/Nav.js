import { useState } from "react";
import styles from "./Nav.module.scss";

export const Nav = () => {
  const [accountDetailsSelected, setAccountDetailsSelected] = useState(true);

  const [orderHistorySelected, setOrderHistorySelected] = useState(false);

  return (
    <nav className={styles["nav"]}>
      <ul className={styles["nav__list"]} role="list">
        <li
          className={`${styles["nav__item"]} ${
            accountDetailsSelected ? styles["nav__item_selected"] : ""
          }`.trim()}
        >
          Account Details
        </li>
        <li
          className={`${styles["nav__item"]} ${
            orderHistorySelected ? styles["nav__item_selected"] : ""
          }`.trim()}
        >
          Order History
        </li>
      </ul>
    </nav>
  );
};
