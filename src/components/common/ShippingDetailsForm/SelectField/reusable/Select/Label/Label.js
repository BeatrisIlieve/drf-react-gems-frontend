import styles from "./Label.module.scss";

export const Label = ({
  formItems,
  items,
  isDisabled,
  selectedItem,
  inputName,
}) => {
  return (
    <label htmlFor="floatingSelect">
      {items.length === 0 && !isDisabled ? (
        <span className={styles["loader"]}></span>
      ) : selectedItem ? (
        formItems[inputName].label
      ) : (
        ""
      )}
    </label>
  );
};
