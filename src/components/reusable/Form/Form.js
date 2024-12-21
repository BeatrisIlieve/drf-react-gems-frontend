import { Button } from "../Button/Button";

import styles from "./Form.module.scss";

export const Form = ({
  children,
  buttonLabel,
  buttonColor,
  buttonType,
  submitHandler,
}) => {
  return (
    <form className={styles["form"]} onSubmit={submitHandler}>
      {children}
      <div className={styles["form__button"]}>
        <Button
          label={buttonLabel}
          color={buttonColor}
          buttonType={buttonType}
        />
      </div>
    </form>
  );
};
