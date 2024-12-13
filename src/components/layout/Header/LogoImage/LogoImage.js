import { Link } from "react-router-dom";

import styles from "./LogoImage.module.scss";

export const LogoImage = () => {
  return (
    <Link to={"/"}>
      <div className={styles["logo-image"]}>
        <img
          className={styles["logo-image__img"]}
          src={
            "https://res.cloudinary.com/deztgvefu/image/upload/v1726147711/forget-me-not-collection/miniImages/logo2_zfmuo1.png"
          }
          alt="logo-image"
        />
        <img
          className={styles["logo-image__text"]}
          src="https://res.cloudinary.com/deztgvefu/image/upload/v1733837454/forget-me-not-collection/miniImages/Screenshot_2024-12-10_at_15.29.46_vs8dyj.png"
          alt="logo-text"
        />
      </div>
    </Link>
  );
};
