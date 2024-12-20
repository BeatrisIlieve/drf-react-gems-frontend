import styles from "./DeliveryInformation.module.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShippingDetailsModal } from "../../../common/ShippingDetailsModal/ShippingDetailsModal";
import { useToggleIsModalOpen } from "../../../../hooks/useToggleIsModalOpen";

export const DeliveryInformation = () => {
  const { toggleIsModalOpen } = useToggleIsModalOpen();

  return (
    <>
      <ShippingDetailsModal />
      <section className={styles["delivery-info"]}>
        <h4 className={styles["delivery-info__title"]}>Delivery Information</h4>
        <div className={styles["delivery-info__separator"]}></div>
        <p className={styles["delivery-info__paragraph"]}>
          You haven’t added a delivery address yet.
        </p>
        <div className={styles["delivery-info__separator"]}></div>
        <button
          className={styles["delivery-info__button"]}
          onClick={toggleIsModalOpen}
        >
          <FontAwesomeIcon
            icon={faPlus}
            className={styles["delivery-info__icon"]}
          />
          <span className={styles["delivery-info__span"]}>
            Add a Delivery Address
          </span>
        </button>
      </section>
    </>
  );
};
