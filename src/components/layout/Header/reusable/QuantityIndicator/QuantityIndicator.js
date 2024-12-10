import styles from "./QuantityIndicator.module.scss";

export const QuantityIndicatedLink = ({ quantity }) => {
  return (
    <div className={styles["container"]}>
      <span>{quantity}</span>
    </div>
  );
};
