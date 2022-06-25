import React, { useContext } from "react";

// Import state from context
import { CheckboxContext } from "../assets/Context";

// Import styles
import "./AlphabetCheckbox.css";

const AlphabetCheckbox = ({ rowCheckbox }) => {
  const handleCheckboxChange = useContext(CheckboxContext);

  return (
    <div id={rowCheckbox + "row"} className="alphabetCheckbox">
      <label htmlFor={rowCheckbox} className="alphabetCheckbox__label">
        {rowCheckbox}
      </label>
      <input
        type="checkbox"
        id={rowCheckbox}
        name="japaneseCharacter"
        className="alphabetCheckbox__input"
        value={rowCheckbox}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default AlphabetCheckbox;
