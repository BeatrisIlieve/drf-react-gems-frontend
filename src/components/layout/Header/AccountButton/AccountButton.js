import { Icon } from "../../../reusable/Icon/Icon";

import styles from "./AccountButton.module.scss";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const AccountButton = ({ accountButtonClickHandler }) => {
  return (
    <button className={styles["container"]} onClick={accountButtonClickHandler}>
      <div>
        <span></span>
      </div>
      <Icon icon={faUser} />
    </button>
  );
};
