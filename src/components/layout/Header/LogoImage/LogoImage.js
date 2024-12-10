import { Link } from "react-router-dom";

import styles from "./LogoImage.module.css";

export const LogoImage = ({ isHidden }) => {
  return (
    <Link to={"/"}>
      <div
        className={`${styles["container"]} ${
          isHidden ? styles["hidden"] : ""
        }`.trim()}
      >
        <img
          className={styles["logo-img"]}
          src={
            "https://res.cloudinary.com/deztgvefu/image/upload/v1726147711/forget-me-not-collection/miniImages/logo2_zfmuo1.png"
          }
          alt="logo-image"
        />
        <img
          className={styles["text-img"]}
          src="https://res.cloudinary.com/deztgvefu/image/upload/v1733837454/forget-me-not-collection/miniImages/Screenshot_2024-12-10_at_15.29.46_vs8dyj.png"
          alt="logo-text"
        />
      </div>
    </Link>
  );
};
