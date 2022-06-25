import React, { useEffect } from "react";

//Import react-router
import { Link } from "react-router-dom";

//Import the checkboxes component
import AlphabetCheckbox from "./AlphabetCheckbox";

//Import styles
import "./HiraganaSelector.css";

const HiraganaSelector = ({
  checkboxData,
  createHiraganaCardPool,
  handleCardClear,
}) => {
  //Clears card pool and checkbox selection so that they don't just keep adding to array
  useEffect(() => {
    handleCardClear();
  }, []);

  return (
    <section className="hiraganaSelector">
      <h3 className="hiraganaSelector__title">Choose Your Hiragana Rows</h3>
      <div className="hiraganaSelector__checkboxContainer">
        {/* Map through alphabet and create a checkbox component for each row */}
        {checkboxData.length
          ? checkboxData.map((rowCheckbox) => (
              <AlphabetCheckbox rowCheckbox={rowCheckbox} key={rowCheckbox} />
            ))
          : null}
      </div>

      {/* Routes to flashcard game, but also triggers card pool function */}
      <Link
        to="/Flashcard"
        onClick={createHiraganaCardPool}
        className="hiraganaSelector__link"
      >
        Start Flashcard Session
      </Link>
    </section>
  );
};

export default HiraganaSelector;
