import { SelectField } from "./SelectField/SelectField";
import { Label } from "./Label/Label";
import { ValidationFeedback } from "./ValidationFeedback/ValidationFeedback";

export const Select = ({
  items,
  selectedItem,
  isDisabled,
  inputName,
  formItems,
  updateFormItems,
  updateUserData,
}) => {
  return (
    <div className="form-floating mb-3">
      <SelectField
        items={items}
        selectedItem={selectedItem}
        isDisabled={isDisabled}
        inputName={inputName}
        formItems={formItems}
        updateUserData={updateUserData}
        updateFormItems={updateFormItems}
      />
      <Label
        items={items}
        selectedItem={selectedItem}
        isDisabled={isDisabled}
        inputName={inputName}
        formItems={formItems}
      />
      <ValidationFeedback formItems={formItems} inputName={inputName} />
    </div>
  );
};
