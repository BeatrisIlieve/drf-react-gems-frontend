import styles from "./ShippingDetails.module.scss";

import { ShippingDetailsForm } from "../../ShippingDetailsForm/ShippingDetailsForm";
import { useToggleIsModalOpen } from "../../../../hooks/useToggleIsModalOpen";
export const ShippingDetails = () => {
  const { toggleIsModalOpen } = useToggleIsModalOpen();

  return (
    <section className={styles["shipping-details"]}>
      <h2 className={styles["shipping-details__title"]}>Shipping Details</h2>
      <ShippingDetailsForm toggleIsModalOpen={toggleIsModalOpen} />
    </section>
  );
};
