import { Button } from "../../../reusable/Button/Button";

import styles from "./Form.module.scss";

export const Form = ({
  formTitle,
  formParagraph,
  buttonLabel,
  submitHandler,
  children,
}) => {
  return (
    <div className={styles["form-container"]}>
      <h1 className={styles["form-container__title"]}>{formTitle}</h1>
      <p className={styles["form-container__paragraph"]}>{formParagraph}</p>
      <div className="container mt-5">
        <form
          className={styles["form-container__form"]}
          onSubmit={submitHandler}
        >
          <div className={styles["form-container__children"]}>{children}</div>
          <Button label={buttonLabel} color={"black"} />
        </form>
      </div>
    </div>
  );
};
