import styles from "./Description.module.scss";

export const Description = ({ title, description }) => {
  return (
    <div className={styles["description"]}>
      <h2 className={styles["description__title"]}>{title}</h2>
      {/* <p className={styles["description__description"]}>{description}</p> */}
      <p className={styles["description__description"]}>
        A series of fine jewelry designs that celebrate the endless <span>beauty of
        nature’s</span> greatest gifts – rare gemstones and flowers in bloom.
      </p>
    </div>
  );
};
