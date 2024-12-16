import styles from "./Button.module.scss";

export const Button = ({ label, color, callBackFunction }) => {
  return (
    <button className={styles[`${color}-button`]} onClick={callBackFunction}>
      {label}
    </button>
  );
};
