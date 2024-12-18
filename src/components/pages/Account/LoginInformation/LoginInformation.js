import styles from "./LoginInformation.module.scss";

export const LoginInformation = () => {
  return (
    <section className={styles["delivery-info"]}>
      <h4 className={styles["delivery-info__title"]}>Delivery Information</h4>
      <button className={styles["delivery-button"]}>Add a Delivery Address</button>
    </section>
  );
};
