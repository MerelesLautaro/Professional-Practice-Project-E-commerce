import React, { useState } from "react";
import { useField } from "formik";
import { FiEye, FiEyeOff } from "react-icons/fi";
import InputField from "./InputField";

const FormElement = ({ element }) => {
  const { type, name, label, options = [], ...rest } = element;

  switch (type) {
    case "text":
    case "password":
    case "email":
    case "number":
    case "tel":
      return <InputField{... element}/>;

    case "select":
      return renderSelect();

    case "button":
      return (
        <button type={element.submit ? "submit" : "button"} {...rest}>
          {label}
        </button>
      );

    default:
      return null;
  }
};

export default FormElement;
