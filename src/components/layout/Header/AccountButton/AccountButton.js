import { Icon } from "../../../reusable/Icon/Icon";

import styles from "./AccountButton.module.scss";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const AccountButton = ({ callBackFunction }) => {
  return (
    <button className={styles["container"]} onClick={callBackFunction}>
      <div>
        <span></span>
      </div>
      <Icon icon={faUser} />
    </button>
  );
};
