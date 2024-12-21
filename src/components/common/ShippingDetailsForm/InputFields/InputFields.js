export const InputFields = ({
  userData,
  formItems,
  updateFormItems,
  updateUserData,
  changeHandler,
}) => {


  const renderInputField = (key, field) => (
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
        onChange={(e) => {
          updateUserData(key, e.target.value);
          updateFormItems(key, e.target.value);
        }}
        // onChange={changeHandler}
        onBlur={(e) => updateFormItems(key, e.target.value)}
      />
      <label htmlFor={field.id}>{field.label}</label>
      <div className="invalid-feedback">{field.invalidMessage}</div>
      <div className="valid-feedback">Looks good</div>
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
