import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

import styles from "./LikeButton.module.scss";

export const LikeButton = () => {
  return (
    <FontAwesomeIcon icon={regularHeart} className={styles["like-button"]} />
  );
};
