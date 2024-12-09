import styles from "./LogoImage.module.scss";

export const LogoImage = () => {
  return (
    <div className={styles.container}>
      <img
        src={
          "https://res.cloudinary.com/deztgvefu/image/upload/v1726147711/forget-me-not-collection/miniImages/logo2_zfmuo1.png"
        }
        alt="logo-image"
      />
    </div>
  );
};
