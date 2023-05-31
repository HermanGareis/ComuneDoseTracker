import React, { useState, useEffect } from "react";
import {
  getComunesOrderedByTwoDoses,
  getComuneWithMoreOneDose,
  getComunesOrderedByTwoDosesFromProvince,
  getComuneWithMoreOneDoseFromProvince,
  getComuneWithMoreTwoDosesFromProvince,
  getComuneWithMoreTwoDoses,
  getComuneWithLessOneDose,
  getTotalNumberOfOneDose,
  getTotalNumberOfTwoDoses,
  getTotalNumberOfOneDoseFromProvince,
  getTotalNumberOfTwoDosesFromProvince,
} from "./client";
import DropDown from "./DropDown";
import "./styles.css";
import MyModal from "./MyModal";

const Header = ({ setComunes, siglas }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedSigla, setSelectedSigla] = useState("");
  const [showDropdown, setShowDropDown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dosiAmmount, setDosiAmmount] = useState(0);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  useEffect(() => {
    const shouldShowDropdown =
      selectedOption === "getComunesOrderedByTwoDosesFromProvince" ||
      selectedOption === "getComuneWithMoreOneDoseFromProvince" ||
      selectedOption === "getComuneWithMoreTwoDosesFromProvince" ||
      selectedOption === "getTotalNumberOfOneDoseFromProvince" ||
      selectedOption === "getTotalNumberOfTwoDosesFromProvince" 
      ;
    setShowDropDown(shouldShowDropdown);
  }, [selectedOption]);

  useEffect(() => {
    console.log(dosiAmmount);
    if (dosiAmmount !== 0) {
      setShowModal(true);
    }
  }, [dosiAmmount]);

  const actionsGetComunes = {
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

  const actionsNumberDosi = {
    getTotalNumberOfOneDose,
    getTotalNumberOfTwoDoses,
    getTotalNumberOfOneDoseFromProvince: () =>
      getTotalNumberOfOneDoseFromProvince(selectedSigla),
    getTotalNumberOfTwoDosesFromProvince: () =>
      getTotalNumberOfTwoDosesFromProvince(selectedSigla),
  };

  const performActionGetComunes = () => {
    const action = actionsGetComunes[selectedOption];
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

  const performActionNumberDosi = () => {
    const action = actionsNumberDosi[selectedOption];
    if (action) {
      action()
        .then((res) => res.json())
        .then((data) => {
          setDosiAmmount(data);
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
    console.log(selectedOption);
    if (Object.keys(actionsGetComunes).includes(selectedOption)) {
      performActionGetComunes();
    } else {
      performActionNumberDosi();
    }
  };

  return (
    <header>
      <h3>Header</h3>
      <form onSubmit={handleSubmit}>
        <select value={selectedOption} onChange={handleOptionChange} function>
          <option value="">Select an option</option>

          <option value="getComunesOrderedByTwoDoses">All Comunes</option>

          <option value="getComuneWithMoreOneDose">
            Comune with more 1st dose
          </option>
          <option value="getComuneWithMoreTwoDoses">
          Comune with more 2nd dose
          </option>
          <option value="getComuneWithLessOneDose">
            Comune with less 1st dose
          </option>

          <option value="getComunesOrderedByTwoDosesFromProvince">
            All Comunes from Province
          </option>

          <option value="getComuneWithMoreOneDoseFromProvince">
            Comune with more 1st dose from province
          </option>

          <option value="getComuneWithMoreTwoDosesFromProvince">
          Comune with more 2nd dose from province
          </option>

          <option value="getTotalNumberOfOneDose">
            Total number of 1st dose
          </option>
          <option value="getTotalNumberOfTwoDoses">
            Total number of 2nd dose
          </option>
          <option value="getTotalNumberOfOneDoseFromProvince">Total number of 1st dose from province</option>
          <option value="getTotalNumberOfTwoDosesFromProvince">Total number of 2nd dose from province</option>
        </select>
        <div>
          <DropDown
            siglas={siglas}
            setSelectedSigla={setSelectedSigla}
            showDropdown={showDropdown}
          />
        </div>
        <MyModal
          showModal={showModal}
          setShowModal={setShowModal}
          selectedOption={selectedOption}
          dosiAmmount={dosiAmmount}
          selectedSigla={selectedSigla}
        />
        <button type="submit">Submit</button>
      </form>
    </header>
  );
};

export default Header;
