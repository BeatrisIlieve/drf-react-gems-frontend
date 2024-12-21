import styles from "./TextContainer.module.scss";

export const TextContainer = ({ titleContent, paragraphContent }) => {
  return (
    <>
      <h1 className={styles["title"]}>{titleContent}</h1>
      <p className={styles["paragraph"]}>{paragraphContent}</p>
    </>
  );
};
