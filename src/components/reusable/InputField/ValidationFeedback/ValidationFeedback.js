export const ValidationFeedback = ({ formItems, inputName }) => {
  return (
    <>
      <div className="valid-feedback">Looks good!</div>
      <div className="invalid-feedback">
        {formItems[inputName].invalidMessage}
      </div>
    </>
  );
};
