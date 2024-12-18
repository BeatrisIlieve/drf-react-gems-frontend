// import React, { useState, useEffect } from "react";
// import { useService } from "../../../../../hooks/useService";
// import { userShippingDetailsServiceFactory } from "../../../../../services/userShippingDetailsService";

// export const CountrySelector = ({ selectedCountry, updateSelectedCountry }) => {
//   const userShippingDetailsService = useService(
//     userShippingDetailsServiceFactory
//   );
//   const [countries, setCountries] = useState([]); // List of countries

//   useEffect(() => {
//     userShippingDetailsService
//       .getCountries()
//       .then((data) => {
//         setCountries(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div>
//       <select
//         onChange={(e) => updateSelectedCountry(e.target.value)}
//         value={selectedCountry | ""}
//       >
//         <option value="">Country *</option>
//         {countries.map((country) => (
//           <option key={country.id} value={country.id}>
//             {country.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };


// import React, { useState, useEffect } from "react";
// import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
// import { useService } from "../../../../../hooks/useService";
// import { userShippingDetailsServiceFactory } from "../../../../../services/userShippingDetailsService";

// export const CountrySelector = ({ selectedCountry, updateSelectedCountry }) => {
//   const userShippingDetailsService = useService(
//     userShippingDetailsServiceFactory
//   );
//   const [countries, setCountries] = useState([]); // List of countries
//   const [error, setError] = useState(false); // Error state for validation

//   useEffect(() => {
//     userShippingDetailsService
//       .getCountries()
//       .then((data) => {
//         setCountries(data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   const handleChange = (event) => {
//     const value = event.target.value;

//     // Update selected country and clear validation error
//     updateSelectedCountry(value);
//     if (value) setError(false);
//   };

//   const validateSelection = () => {
//     // Show error if no country is selected
//     if (!selectedCountry) setError(true);
//   };

//   return (
//     <Form>
//       <FormGroup controlId="countrySelector">
//         {/* <FormLabel>Country *</FormLabel> */}
//         <FormControl
//           as="select"
//           onChange={handleChange}
//           onBlur={validateSelection} // Validate on losing focus
//           value={selectedCountry || ""} // Prevent undefined value warnings
//           isInvalid={error} // Apply error styling if validation fails
//         >
//           <option value="">Country *</option>
//           {countries.map((country) => (
//             <option key={country.id} value={country.id}>
//               {country.name}
//             </option>
//           ))}
//         </FormControl>
//         {error && (
//           <FormControl.Feedback type="invalid">
//             Please select a country.
//           </FormControl.Feedback>
//         )}
//       </FormGroup>
//     </Form>
//   );
// };


// import React, { useState, useEffect } from "react";
// import { Form, FormGroup, FloatingLabel } from "react-bootstrap";
// import { useService } from "../../../../../hooks/useService";
// import { userShippingDetailsServiceFactory } from "../../../../../services/userShippingDetailsService";

// export const CountrySelector = ({ selectedCountry, updateSelectedCountry }) => {
//   const userShippingDetailsService = useService(
//     userShippingDetailsServiceFactory
//   );
//   const [countries, setCountries] = useState([]); // List of countries
//   const [error, setError] = useState(false); // Error state for validation

//   useEffect(() => {
//     userShippingDetailsService
//       .getCountries()
//       .then((data) => {
//         setCountries(data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   const handleChange = (event) => {
//     const value = event.target.value;

//     // Update selected country and clear validation error
//     updateSelectedCountry(value);
//     if (value) setError(false);
//   };

//   const validateSelection = () => {
//     // Show error if no country is selected
//     if (!selectedCountry) setError(true);
//   };

//   return (
//     <Form>
//       <FormGroup controlId="countrySelector">
//         <FloatingLabel label="Country *">
//           <Form.Select
//             onChange={handleChange}
//             onBlur={validateSelection} // Validate on losing focus
//             value={selectedCountry || ""} // Prevent undefined value warnings
//             isInvalid={error} // Apply error styling if validation fails
//           >
//             <option value="">Select a country</option>
//             {countries.map((country) => (
//               <option key={country.id} value={country.id}>
//                 {country.name}
//               </option>
//             ))}
//           </Form.Select>
//         </FloatingLabel>
//         {error && (
//           <Form.Control.Feedback type="invalid">
//             Please select a country.
//           </Form.Control.Feedback>
//         )}
//       </FormGroup>
//     </Form>
//   );
// };


// import React, { useState, useEffect } from "react";
// import { Form, FormGroup, FloatingLabel } from "react-bootstrap";
// import { useService } from "../../../../../hooks/useService";
// import { userShippingDetailsServiceFactory } from "../../../../../services/userShippingDetailsService";

// export const CountrySelector = ({ selectedCountry, updateSelectedCountry }) => {
//   const userShippingDetailsService = useService(
//     userShippingDetailsServiceFactory
//   );
//   const [countries, setCountries] = useState([]); // List of countries
//   const [error, setError] = useState(false); // Error state for validation

//   useEffect(() => {
//     userShippingDetailsService
//       .getCountries()
//       .then((data) => {
//         setCountries(data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   const handleChange = (event) => {
//     const value = event.target.value;

//     // Update selected country and clear validation error
//     updateSelectedCountry(value);
//     if (value) setError(false);
//   };

//   const validateSelection = () => {
//     // Show error if no country is selected
//     if (!selectedCountry) setError(true);
//   };

//   return (
//     <Form>
//       <FormGroup controlId="countrySelector">
//         <FloatingLabel
//           controlId="floatingSelect"
//           label="Country *" // Floating label
//         >
//           <Form.Select
//             onChange={handleChange}
//             onBlur={validateSelection} // Validate on losing focus
//             value={selectedCountry || ""} // Prevent undefined value warnings
//             isInvalid={error} // Apply error styling if validation fails
//           >
//             <option value="" disabled>
//               Country *
//             </option>
//             {countries.map((country) => (
//               <option key={country.id} value={country.id}>
//                 {country.name}
//               </option>
//             ))}
//           </Form.Select>
//         </FloatingLabel>
//         {error && (
//           <Form.Control.Feedback type="invalid">
//             Please select a country.
//           </Form.Control.Feedback>
//         )}
//       </FormGroup>
//     </Form>
//   );
// };


import React, { useState, useEffect } from "react";
import { Form, FormGroup, FloatingLabel } from "react-bootstrap";
import { useService } from "../../../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../../../services/userShippingDetailsService";

export const CountrySelector = ({ selectedCountry, updateSelectedCountry }) => {
  const userShippingDetailsService = useService(userShippingDetailsServiceFactory);
  const [countries, setCountries] = useState([]); // List of countries
  const [error, setError] = useState(false); // Error state for validation

  useEffect(() => {
    userShippingDetailsService
      .getCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;

    // Update selected country and clear validation error
    updateSelectedCountry(value);
    if (value) setError(false);
  };

  const validateSelection = () => {
    // Show error if no country is selected
    if (!selectedCountry) setError(true);
  };

  return (
    <Form>
      <FormGroup controlId="countrySelector">
        {/* Conditionally render FloatingLabel only when a country is selected */}
        {selectedCountry && (
          <FloatingLabel controlId="floatingSelect" label="Country *">
            <Form.Select
              onChange={handleChange}
              onBlur={validateSelection} // Validate on losing focus
              value={selectedCountry || ""}
              isInvalid={error} // Apply error styling if validation fails
            >
              <option value="" disabled>
                Country *
              </option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </Form.Select>
          </FloatingLabel>
        )}

        {/* If no country selected, render select dropdown with default "Country *" label */}
        {!selectedCountry && (
          <Form.Select
            onChange={handleChange}
            onBlur={validateSelection}
            value={selectedCountry || ""}
            isInvalid={error}
          >
            <option value="" disabled>
              Country *
            </option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
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
    </Form>
  );
};
