import React, { useState } from "react";

function Reg(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="container justify-content-center">
      <div className="put">
        <label className="label">{label}</label>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
          className="w-100 int"
          required
        />
        <span className="span">{errorMessage}</span>
      </div>
    </div>
  );
}

export default Reg;