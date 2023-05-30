import React from "react";
import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";
import "./styles.css";

const DropDown = ({ siglas, setSelectedSigla, showDropdown }) => {
  if (!showDropdown) {
    return null;
  }

  return (
    <ComboBox
      className="dropdown"
      options={siglas}
      placeholder="Select Provincia"
      onSelect={(option) => setSelectedSigla(option)}
    />
  );
};

export default DropDown;
