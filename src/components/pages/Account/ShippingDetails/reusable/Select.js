import { useState } from "react";
import { Form, FormGroup, FloatingLabel } from "react-bootstrap";

export const Select = ({ items, selectedItem, updateSelectedItem }) => {
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;

    updateSelectedItem(value);
    if (value) setError(false);
  };

  const validateSelection = () => {
    if (!selectedItem) setError(true);
  };
  return (
    <FormGroup controlId="countrySelector">
      {selectedItem && (
        <FloatingLabel controlId="floatingSelect" label="Country *">
          <Form.Select
            onChange={handleChange}
            onBlur={validateSelection}
            value={selectedItem || ""}
            isInvalid={error}
          >
            <option value="" disabled>
              Country *
            </option>
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </Form.Select>
        </FloatingLabel>
      )}
      {!selectedItem && (
        <Form.Select
          onChange={handleChange}
          onBlur={validateSelection}
          value={selectedItem || ""}
          isInvalid={error}
        >
          <option value="" disabled>
            Country *
          </option>
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </Form.Select>
      )}
      {error && (
        <Form.Control.Feedback type="invalid">
          Please select a country.
        </Form.Control.Feedback>
      )}
    </FormGroup>
  );
};
