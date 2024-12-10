import { Link } from "react-router-dom";

import styles from "./LogoImage.module.scss";

export const LogoImage = () => {
  return (
    <Link to={"/"}>
      <div className={styles.container}>
        <img
          src={
            "https://res.cloudinary.com/deztgvefu/image/upload/v1726147711/forget-me-not-collection/miniImages/logo2_zfmuo1.png"
          }
          alt="logo-image"
        />
      </div>
    </Link>
  );
};
