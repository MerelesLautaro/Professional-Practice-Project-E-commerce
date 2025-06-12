import React, { useState } from 'react';
import { useField } from 'formik';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const FormElement = ({ element }) => {
  const { type, name, label, ...rest } = element;
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(prev => !prev);
  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

  const renderInput = () => (
    <div className="input-field">
      {label && <label htmlFor={name}>{label}</label>}

      <div className="input-wrapper">
        <input
          id={name}
          type={inputType}
          {...field}
          {...rest}
        />
        {type === 'password' && (
          <span className="password-toggle" onClick={togglePassword}>
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </span>
        )}
      </div>

      {meta.touched && meta.error && (
        <div className="error">{meta.error}</div>
      )}
    </div>
  );

  switch (type) {
    case 'text':
    case 'password':
    case 'email':
    case 'number':
    case 'tel':
      return renderInput();

    case 'button':
      return (
        <button type={element.submit ? 'submit' : 'button'} {...rest}>
          {label}
        </button>
      );

    default:
      return null;
  }
};

export default FormElement;
