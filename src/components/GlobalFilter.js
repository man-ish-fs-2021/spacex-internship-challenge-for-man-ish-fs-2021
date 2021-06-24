import React, { useEffect, useState } from "react";
import "../dropdown.css";
// global filter options
const options = ["All Launches", "Upcoming", "Failed", "Succesful"];
export const GlobalFilter = ({ setGlobalFilter, rows }) => {
  // state for the dropdown list
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  // setting the global filter
  useEffect(() => {
    if (selectedOption === "All Launches") {
      setGlobalFilter("");
    } else if (selectedOption === "Upcoming") {
      setGlobalFilter("upcoming");
    } else if (selectedOption === "Succesful") {
      setGlobalFilter("true");
    } else if (selectedOption === "Failed") {
      setGlobalFilter("false");
    }
  }, [selectedOption, setGlobalFilter]);
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const toggling = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="DropDownContainer">
        <div className="DropDownHeader" onClick={toggling}>
          <span className="filter-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M12 0.666656V1.99999H11.3333L8 6.99999V12.6667H4V6.99999L0.666667 1.99999H0V0.666656H12ZM2.26933 1.99999L5.33333 6.59599V11.3333H6.66667V6.59599L9.73067 1.99999H2.26933Z"
                fill="#4B5563"
              />
            </svg>
          </span>
          {selectedOption || "All Launches"}
          <span className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
            >
              <path
                d="M4.99999 3.78135L8.29999 0.481354L9.24266 1.42402L4.99999 5.66669L0.757324 1.42402L1.69999 0.481354L4.99999 3.78135Z"
                fill="#4B5563"
              />
            </svg>
          </span>
        </div>

        {isOpen && (
          <div className="DropDownListContainer">
            <ul className="DropDownList">
              {options.map((option, index) => (
                <li
                  className="list-item"
                  onClick={onOptionClicked(option)}
                  key={`option-${index}`}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default GlobalFilter;
