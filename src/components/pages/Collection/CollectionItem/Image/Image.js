import styles from "./Image.module.scss"

export const Image = ({ imageUrl }) => {
  return (
    <div className={styles["image"]}>
      <img src={imageUrl} alt="forget-me-not-collection" />
    </div>
  );
};
