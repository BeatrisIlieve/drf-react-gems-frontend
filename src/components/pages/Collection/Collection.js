import styles from "./Collection.module.scss";

export const Collection = () => {
  return (
    <section className={styles["collection"]}>
      <article>
        <div>
          <img
            src="https://res.cloudinary.com/deztgvefu/image/upload/v1726330964/forget-me-not-collection/miniImages/hero-mobile_k83pfc.jpg"
            alt="forget-me-not-collection"
          />
        </div>
        <div>Products</div>
      </article>
    </section>
  );
};
