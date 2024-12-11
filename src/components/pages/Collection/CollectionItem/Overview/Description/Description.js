import styles from "./Description.module.scss";

export const Description = ({ title, description }) => {
  return (
    <div className={styles["description"]}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
