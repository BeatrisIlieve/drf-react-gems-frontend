import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ProfilePicture.module.scss";

export const ProfilePicture = () => {
  return (
    <div className={styles["profile-picture"]}>
      <img
        className={styles["profile-picture__img"]}
        src="https://res.cloudinary.com/deztgvefu/image/upload/v1734438185/forget-me-not-collection/miniImages/3d-illustration-beautiful-young-woman-pink-suit_1142-51471_qbi0bs.avif"
        alt=""
      />
      <FontAwesomeIcon icon={faCamera} className={styles["profile-picture__icon"]}/>
    </div>
  );
};
