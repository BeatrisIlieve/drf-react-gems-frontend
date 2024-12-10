import { Link } from "react-router-dom";

import { Icon } from "../reusable/Icon/Icon";

import styles from "./AccountLink.module.scss";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";

export const AccountLink = () => {
  return (
    <Link to={"/account"} className={styles["link"]}>
      <div>
        <span></span>
      </div>
      <Icon icon={faUser} />
    </Link>
  );
};
