import { ValidationFeedback } from "./ValidationFeedback/ValidationFeedback";
import { Input } from "../Input/Input";
import { Label } from "./Label/Label";

export const InputField = ({
  userData,
  formItems,
  updateFormItems,
  updateUserData,
}) => {
  const renderInputField = (key, field) => (
    <div className="form-floating mb-3" key={key}>
      <Input
        userData={userData}
        updateUserData={updateUserData}
        updateFormItems={updateFormItems}
        field={field}
        fieldKey={key}
      />
      <Label field={field} />
      <ValidationFeedback formItems={formItems} inputName={key} />
    </div>
  );

  return (
    <>
      {Object.entries(formItems).map(([key, field]) =>
        key !== "country" && key !== "city"
          ? renderInputField(key, field)
          : null
      )}
    </>
  );
};
