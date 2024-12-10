import styles from "./QuantityIndicatedLink.module.scss";
import { Icon } from "../Icon/Icon";
import { Link } from "react-router-dom";

export const QuantityIndicatedLink = ({ url, icon, quantity }) => {
  return (
    <>
      <Icon icon={icon} />
      <Link to={url} className={styles["link"]}>
        <span>{quantity}</span>
      </Link>
    </>
  );
};
