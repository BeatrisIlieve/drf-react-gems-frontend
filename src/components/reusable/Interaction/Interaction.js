import { LikeButton } from "./LikeButton/LikeButton";
import { SwitchImageButton } from "./SwitchImageButton/SwitchImageButton";

import styles from "./Interaction.module.scss";

export const Interaction = ({firstImageIsActive, clickHandler}) => {
  return (
    <div className={styles["interaction"]}>
      <SwitchImageButton firstImageIsActive={firstImageIsActive} clickHandler={clickHandler}/>
      <LikeButton />
    </div>
  );
};
