import { useState } from "react";
import styles from "./Nav.module.scss";

export const Nav = () => {
  const [selectedItem, setSelectedItem] = useState("accountDetails");

  return (
    <nav className={styles["nav"]}>
      <ul className={styles["nav__list"]} role="list">
        <li
          className={`${styles["nav__item"]} ${
            selectedItem === "accountDetails"
              ? styles["nav__item_selected"]
              : ""
          }`.trim()}
          onClick={() => setSelectedItem("accountDetails")}
        >
          Account Details
        </li>
        <li
          className={`${styles["nav__item"]} ${
            selectedItem === "orderHistory" ? styles["nav__item_selected"] : ""
          }`.trim()}
          onClick={() => setSelectedItem("orderHistory")}
        >
          Order History
        </li>
      </ul>
    </nav>
  );
};
