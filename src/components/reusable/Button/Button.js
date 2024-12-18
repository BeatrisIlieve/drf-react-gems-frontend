import styles from "./Button.module.scss";

export const Button = ({ label, color, callBackFunction, buttonType }) => {
  return (
    <button
      className={styles[`${color}-button`]}
      onClick={callBackFunction}
      type={buttonType}
    >
      {label}
    </button>
  );
};
