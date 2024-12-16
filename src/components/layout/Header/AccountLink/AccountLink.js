import { useState } from "react";
import { Link } from "react-router-dom";

import { Icon } from "../../../reusable/Icon/Icon";

import styles from "./AccountLink.module.scss";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Auth } from "../../../modals/Auth/Auth";

export const AccountLink = ({accountButtonClickHandler}) => {


  return (
    <>
      <div className={styles["container"]} onClick={accountButtonClickHandler}>
        <div>
          <span></span>
        </div>
        <Icon icon={faUser} />
      </div>
    </>
  );
};
