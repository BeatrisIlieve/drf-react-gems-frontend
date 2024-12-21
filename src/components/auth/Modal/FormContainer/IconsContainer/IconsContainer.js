import { XMark } from "../../../../reusable/XMark/XMark";
import { CircleLeft } from "./CircleLeft/CircleLeft";
import styles from "./IconsContainer.module.scss";

export const IconsContainer = ({ modalCloseHandler }) => {
  return (
    <div className={styles["icons-container"]}>
      <CircleLeft className={styles["icons-container__circle"]} />
      <XMark callbackFunction={modalCloseHandler} />
    </div>
  );
};
