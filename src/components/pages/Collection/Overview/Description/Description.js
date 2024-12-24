import styles from "./Description.module.scss";

export const Description = ({ title, description }) => {
  return (
    <div className={styles["description"]}>
      <h2 className={styles["description__title"]}>{title}</h2>
      {/* <p className={styles["description__description"]}>{description}</p> */}
      <p className={styles["description__description"]}>
        A series of fine jewelry designs that celebrate the endlessbeauty of
        nature’s{" "}
        <span>
          <b>greatest</b> <em>gifts</em>
        </span>{" "}
        – rare gemstones and flowers in bloom.
      </p>
    </div>
  );
};

