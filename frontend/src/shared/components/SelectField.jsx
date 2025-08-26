import React from "react";
import { useField } from "formik";
const SelectField = ({ label, name, options = [], ...rest }) => {
    const [field, meta]= useField(name)
  return (
    <div className="input-field">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input-wrapper">
        <select id={name} {...field} {...rest}>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}

export default SelectField;