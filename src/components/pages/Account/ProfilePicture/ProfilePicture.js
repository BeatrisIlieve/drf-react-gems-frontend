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
        src="https://res.cloudinary.com/deztgvefu/image/upload/v1734448095/forget-me-not-collection/miniImages/bb23850fff6159c25e0592de567c355e_yzbr5u.jpg"
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
