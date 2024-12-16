import { Button } from "../../../reusable/Button/Button";

import { useState } from "react";

import styles from "./Form.module.scss";

export const Form = ({
  formTitle,
  formParagraph,
  buttonLabel,
  submitHandler,
  children,
}) => {
  const [contentIsTransitioning, setContentIsTransitioning] = useState(false);

  const updateContentIsTransitioningHandler = () => {
    setContentIsTransitioning(true);

    setTimeout(() => {
      setContentIsTransitioning(false);
    }, 400);
  };
  return (
    <div
      className={`${styles["form-container"]} ${
        contentIsTransitioning
          ? styles["form-container_transition-out"]
          : styles["form-container_transition-in"]
      }`}
    >
      <h1 className={styles["form-container__title"]}>{formTitle}</h1>
      <p className={styles["form-container__paragraph"]}>{formParagraph}</p>
      <div className="container mt-5">
        <form
          className={styles["form-container__form"]}
          onSubmit={submitHandler}
        >
          <div className={styles["form-container__children"]}>{children}</div>
          <Button
            label={buttonLabel}
            color={"black"}
            callBackFunction={updateContentIsTransitioningHandler}
          />
        </form>
      </div>
    </div>
  );
};
