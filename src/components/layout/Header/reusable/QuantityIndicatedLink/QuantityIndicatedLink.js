import styles from "./QuantityIndicatedLink.module.scss";
import { Icon } from "../Icon/Icon";
import { Link } from "react-router-dom";

export const QuantityIndicatedLink = ({ url, icon, quantity }) => {
  return (
    <Link to={url} className={styles["link"]}>
      <Icon icon={icon} />
      <div>
        <span>{quantity}</span>
      </div>
    </Link>
  );
};
