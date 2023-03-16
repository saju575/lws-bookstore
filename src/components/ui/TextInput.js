import React from "react";

const TextInput = ({ htmlFor, label, ...rest }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor}>{label}</label>
      <input {...rest} />
    </div>
  );
};

export default TextInput;
