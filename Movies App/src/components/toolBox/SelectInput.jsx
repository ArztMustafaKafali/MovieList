import React from "react";

const SelectInput = ({ name, value, onChange, option, defaultoption }) => {
  return (
    <div className="form-group">
      <select
        name={name}
        value={value}
        onChange={onChange}
        option={option}
        defaultoption={defaultoption}
        className="form-control"
      >
        <option >Ranking</option>
        <option >IMDb Rating</option>
        <option >Release Date</option>
        <option >Number of Rating</option>
        <option >Your Rating</option>

      </select>
    </div>
  );
};

export default SelectInput;
