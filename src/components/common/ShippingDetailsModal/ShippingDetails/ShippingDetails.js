import styles from "./ShippingDetails.module.scss";

import { ShippingDetailsForm } from "../../ShippingDetailsForm/ShippingDetailsForm";

export const ShippingDetails = () => {
  return (
    <section className={styles["shipping-details"]}>
      <h2 className={styles["shipping-details__title"]}>Shipping Details</h2>

        <ShippingDetailsForm />

    </section>
  );
};
