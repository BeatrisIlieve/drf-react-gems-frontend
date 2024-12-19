import { Button } from "../../../reusable/Button/Button";

import styles from "./ShippingDetails.module.scss";

import { InputFields } from "./InputFields/InputFields";
import { SelectFields } from "./SelectFields/SelectFields";
import { useShippingDetailsContext } from "../../../../contexts/ShippingDetailsContext";

export const ShippingDetails = () => {
  const { submitHandler } = useShippingDetailsContext();

  return (
    <section className={styles["shipping-details"]}>
      <h2 className={styles["shipping-details__title"]}>Shipping Details</h2>
      <div className="container mt-5">
        <form
          className={styles["shipping-details__form"]}
          onSubmit={submitHandler}
        >
          <InputFields />
          <SelectFields />
          <div className={styles["shipping-details__button"]}>
            <Button label={"Save"} color={"black"} buttonType={"submit"} />
          </div>
        </form>
      </div>
    </section>
  );
};
