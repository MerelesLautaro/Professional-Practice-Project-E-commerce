import React from "react";
const FormButton = ({ label, submit, ...rest })=>{
    return(
        <button type={submit ? "submit" : "button"} {...rest}>
          {label}
        </button>
    )
}
export default FormButton