import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

export const RegularCircle = ({clickHandler}) => {
  return (
    <FontAwesomeIcon
      icon={faCircle}
    //   className={styles["switch-image-button__icon"]}
      onClick={clickHandler}
    />
  );
};