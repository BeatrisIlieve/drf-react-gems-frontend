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
        <div>
          <p>
            The enchanting and delicate beauty of a Forget-Me-Not flower in
            bloom is captured in a series of fine jewelry designs that celebrate
            the endless beauty of nature’s greatest gifts – rare gemstones and
            flowers in bloom.
          </p>
        </div>
      </article>
      <article>
        <div>
          <img
            src="https://res.cloudinary.com/deztgvefu/image/upload/v1733797275/forget-me-not-collection/miniImages/fifty_pdp_forget-me-not_b_rqlq6j.avif"
            alt="forget-me-not-collection"
          />
        </div>
        <div>Products</div>
      </article>
      <article>
        <div>
          <img
            src="https://res.cloudinary.com/deztgvefu/image/upload/v1733797275/forget-me-not-collection/miniImages/fifty_pdp_forget-me-not_a_fcpwwq.avif"
            alt="forget-me-not-collection"
          />
        </div>
        <div>Products</div>
      </article>
    </section>
  );
};
