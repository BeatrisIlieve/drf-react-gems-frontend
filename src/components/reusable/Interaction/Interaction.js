import { LikeButton } from "./LikeButton/LikeButton";
import { SwitchImageButton } from "./SwitchImageButton/SwitchImageButton";

import styles from "./Interaction.module.scss";

export const Interaction = () => {
  return (
    <div className={styles["interaction"]}>
      <SwitchImageButton />
      <LikeButton />
    </div>
  );
};
