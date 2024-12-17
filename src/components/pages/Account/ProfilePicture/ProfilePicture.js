import { useState } from "react";

import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ProfilePicture.module.scss";

export const ProfilePicture = () => {
  const [pictureIsHovered, setPictureIsHovered] = useState(false);

  return (
    <div
      className={styles["profile-picture"]}
      onMouseEnter={() => setPictureIsHovered(true)}
      onMouseLeave={() => setPictureIsHovered(false)}
      onTouchStart={() => setPictureIsHovered(true)}
      onTouchEnd={() => setPictureIsHovered(false)}
    >
      <img
        className={styles["profile-picture__img"]}
        src="https://res.cloudinary.com/deztgvefu/image/upload/v1734438185/forget-me-not-collection/miniImages/3d-illustration-beautiful-young-woman-pink-suit_1142-51471_qbi0bs.avif"
        alt="profile-picture"
      />

      {pictureIsHovered && (
        <>
          <div className={styles["profile-picture__overlay"]}></div>
          <FontAwesomeIcon
            icon={faCamera}
            className={styles["profile-picture__icon"]}
          />
        </>
      )}
    </div>
  );
};
