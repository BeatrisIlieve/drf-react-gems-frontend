import styles from "./Description.module.scss";

export const Description = ({ title, description }) => {
  return (
    <div className={styles["description"]}>
      <h2 className={styles["description__title"]}>{title}</h2>
      <p className={styles["description__description"]}>{description}</p>
    </div>
  );
};
