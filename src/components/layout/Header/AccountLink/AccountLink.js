import { Icon } from "../../../reusable/Icon/Icon";

import styles from "./AccountLink.module.scss";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const AccountLink = ({ accountButtonClickHandler }) => {
  return (
    <button className={styles["container"]} onClick={accountButtonClickHandler}>
      <div>
        <span></span>
      </div>
      <Icon icon={faUser} />
    </button>
  );
};
