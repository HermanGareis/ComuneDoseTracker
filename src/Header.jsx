import React, { useState, useEffect } from "react";
import {
  getComunesOrderedByTwoDoses,
  getComuneWithMoreOneDose,
  getComunesOrderedByTwoDosesFromProvince,
  getComuneWithMoreOneDoseFromProvince,
  getComuneWithMoreTwoDosesFromProvince,
  getComuneWithMoreTwoDoses,
  getComuneWithLessOneDose,
} from "./client";
import DropDown from "./DropDown";
import "./styles.css";

const Header = ({ setComunes, siglas }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedSigla, setSelectedSigla] = useState(""); 
  const [showDropdown, setShowDropDown] = useState(false);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  useEffect(() => {
    const shouldShowDropdown =
      selectedOption === "getComunesOrderedByTwoDosesFromProvince" ||
      selectedOption === "getComuneWithMoreOneDoseFromProvince" ||
      selectedOption === "getComuneWithMoreTwoDosesFromProvince";
    setShowDropDown(shouldShowDropdown);
  }, [selectedOption]);

  const actions = {
    getComunesOrderedByTwoDoses,
    getComuneWithMoreOneDose,
    getComuneWithMoreTwoDoses,
    getComuneWithLessOneDose,
    getComunesOrderedByTwoDosesFromProvince: () =>
      getComunesOrderedByTwoDosesFromProvince(selectedSigla),
    getComuneWithMoreOneDoseFromProvince: () =>
      getComuneWithMoreOneDoseFromProvince(selectedSigla),
    getComuneWithMoreTwoDosesFromProvince: () =>
      getComuneWithMoreTwoDosesFromProvince(selectedSigla),
    // Add more actions
  };

  const performAction = () => {
    const action = actions[selectedOption];
    if (action) {
      action()
        .then((res) => res.json())
        .then((data) => {
          setComunes(Array.isArray(data) ? data : [data]);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      console.log(`Performing ${selectedOption}`);
    } else {
      console.log("No action selected");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    performAction();
  };

  return (
    <header>
      <h3>Header</h3>
      <form onSubmit={handleSubmit}>
        <select value={selectedOption} onChange={handleOptionChange} function>
          <option value="">Select an option</option>

          <option value="getComunesOrderedByTwoDoses">Get all Comunes</option>

          <option value="getComuneWithMoreOneDose">
            Comune with more first dose
          </option>
          <option value="getComuneWithMoreTwoDoses">
            getComuneWithMoreTwoDoses
          </option>
          <option value="getComuneWithLessOneDose">
            getComuneWithLessOneDose
          </option>

          <option value="getComunesOrderedByTwoDosesFromProvince">
            getComunesOrderedByTwoDosesFromProvince
          </option>

          <option value="getComuneWithMoreOneDoseFromProvince">
            getComuneWithMoreOneDoseFromProvince
          </option>

          <option value="getComuneWithMoreTwoDosesFromProvince">
            getComuneWithMoreTwoDosesFromProvince
          </option>

          <option value="action8">Action 8</option>
          <option value="action9">Action 9</option>
          <option value="action10">Action 10</option>
          <option value="action11">Action 11</option>
        </select>
        <div>
          <DropDown
            siglas={siglas}
            setSelectedSigla={setSelectedSigla}
            showDropdown={showDropdown}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </header>
  );
};

export default Header;
