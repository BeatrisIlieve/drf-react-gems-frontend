import { InputFields } from "./InputFields/InputFields";
import { SelectFields } from "./SelectFields/SelectFields";

import { Button } from "../../reusable/Button/Button";
import { useShippingDetailsContext } from "../../../contexts/ShippingDetailsContext";
import styles from "./ShippingDetailsForm.module.scss"
export const ShippingDetailsForm = () => {
  const { submitHandler } = useShippingDetailsContext();
  return (
    <div className="container mt-5">
    <form className={styles["shipping-details-form"]} onSubmit={submitHandler}>
      <InputFields />
      <SelectFields />
      <div className={styles["shipping-details-form__button"]}>
        <Button label={"Save"} color={"black"} buttonType={"submit"} />
      </div>
    </form>
    </div>
  );
};
