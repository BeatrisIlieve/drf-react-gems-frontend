export const ValidationFeedback = ({ formItems, inputName }) => {
  let message;

  if (inputName === "email") {
    if (formItems.email.alreadyRegistered) {
      message = formItems.email.alreadyRegisteredMessage;
    } else if (formItems.email.responseError) {
      message = formItems.email.responseMessage;
    } else {
      message = formItems.email.invalidMessage;
    }
  } else if (inputName === "password") {
    message = formItems.password.responseError
      ? formItems.password.responseMessage
      : formItems.password.invalidMessage;
  } else {
    message = formItems[inputName].invalidMessage;
  }

  return (
    <>
      <div className="valid-feedback">Looks good!</div>
      <div className="invalid-feedback">{message}</div>
    </>
  );
};
