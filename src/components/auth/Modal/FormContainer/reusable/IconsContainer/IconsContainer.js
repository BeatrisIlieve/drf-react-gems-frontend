import { XMark } from "../../../../../reusable/XMark/XMark";
import { GoBack } from "./GoBack/GoBack";
import styles from "./IconsContainer.module.scss";

export const IconsContainer = ({
  modalCloseHandler,
  updateContentIsTransitioningHandler,
}) => {
  return (
    <div className={styles["icons-container"]}>
      <GoBack
        className={styles["icons-container__circle"]}
        updateContentIsTransitioningHandler={
          updateContentIsTransitioningHandler
        }
      />
      <XMark callbackFunction={modalCloseHandler} />
    </div>
  );
};
