import { Button } from "../../../reusable/Button/Button";

import styles from "./Form.module.scss";

export const Form = ({
  formTitle,
  formParagraph,
  buttonLabel,
  fieldLabel,
  fieldErrorMessage, 
  submitHandler,
  children,
}) => {
  return (
    <div className={styles["form-container"]}>
      <h1 className={styles["form-container__title"]}>{formTitle}</h1>
      <p>{formParagraph}</p>
      <div className="container mt-5">
        <form className={styles["form-container__form"]} onSubmit={submitHandler}>
          {children}
          <Button label={buttonLabel} color={"black"} />
        </form>
      </div>
    </div>
  );
};
