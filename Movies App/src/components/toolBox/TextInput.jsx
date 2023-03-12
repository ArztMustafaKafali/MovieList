import React from "react";

const TextInput = ({ name, value, onChange, error }) => {
  return (
    <div className="form-group">
      <input
        className="form-control"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder="lütfen bir film ismi giriniz"
      ></input>
    </div>
  );
};

export default TextInput;
