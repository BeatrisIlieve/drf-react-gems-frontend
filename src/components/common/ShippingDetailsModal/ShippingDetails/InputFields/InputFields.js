import { useShippingDetailsContext } from "../../../../../contexts/ShippingDetailsContext";

export const InputFields = () => {
  const { userData, formItems, updateFormItems, updateUserData } =
    useShippingDetailsContext();

  const handleChange = (e) => {
    const { name, value } = e.target;

    updateUserData(name, value);

    updateFormItems(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    updateFormItems(name, value);
  };

  return (
    <>
      {Object.entries(formItems).map(([key, field]) => (
        <div className="form-floating mb-3" key={key}>
          <input
            type={field.type}
            className={`form-control ${
              field.isValid === true
                ? "is-valid"
                : field.isValid === false
                ? "is-invalid"
                : ""
            }`.trim()}
            id={field.id}
            name={field.name}
            placeholder={field.placeholder}
            value={userData[key] || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="floatingInput">{field.label}</label>
          <div className="invalid-feedback">{field.invalidMessage}</div>
          <div className="valid-feedback">Looks good</div>
        </div>
      ))}
    </>
  );
};
