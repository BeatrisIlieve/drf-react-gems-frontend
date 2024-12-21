import { ValidationFeedback } from "../../../reusable/ValidationFeedback/ValidationFeedback";
import { Input } from "../../../reusable/Input/Input";
export const InputFields = ({
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
      <label htmlFor={field.id}>{field.label}</label>
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
