import styles from "./InfoParagraph.module.scss";

export const InfoParagraph = () => {
  return (
    <p className={styles["info-paragraph"]}>
      You can view all your previous transactions, set default shipping address
      for faster checkout, manage your login credentials as well as upload a
      profile picture.
    </p>
  );
};
