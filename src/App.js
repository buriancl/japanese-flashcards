import React, { useState, useEffect } from "react";

// IMPORT DEPENDANCIES
import { Routes, Route } from "react-router-dom"; //REACT ROUTER

// IMPORT DATA AND CONTEXT
import { CheckboxContext } from "./assets/Context";
import { hiraganaData, katakanaData } from "./assets/LanguageData";

//IMPORT COMPONENTS
import Header from "./components/Header";
import HiraganaSelector from "./components/HiraganaSelector";
import KatakanaSelector from "./components/KatakanaSelector";
import Landing from "./components/Landing";
import FlashCard from "./components/FlashCard";

//Import styles
import "./App.css";

export default function App() {
  //Data to create checkboxes
  const [checkboxData, setCheckboxData] = useState([]);
  // Array of rows to add to flashcard array
  const [selectedRows, setSelectedRows] = useState([]);
  //Characters from the rows client selected
  const [hiraganaCardPool, setHiraganaCardPool] = useState([]);
  const [katakanaCardPool, setKatakanaCardPool] = useState([]);

  //Retrieve hiragana data and provide label data for checkboxes
  const fetchCheckboxes = () => {
    const hiraganaRows = [];
    hiraganaData.map((row) => {
      hiraganaRows.push(row.alphabetRow);
      return null;
    });

    setCheckboxData(hiraganaRows);
  };

  // Trigger fetchChecobox function when app starts
  useEffect(() => {
    fetchCheckboxes();
  }, []);

  //Funciton to allow user to select which alphabet row(s) they wish to study
  const handleCheckboxChange = (e) => {
    setSelectedRows([]);
    const selectedCharacterArray = selectedRows;

    if (e.target.checked === true) {
      selectedCharacterArray.push(e.target.value);
      setSelectedRows(selectedCharacterArray);
    } else {
      const filteredSelectedCharacterArray = selectedRows.filter(
        (value) => value !== e.target.value
      );
      setSelectedRows(filteredSelectedCharacterArray);
    }
  };

  // Creates an array in state of alphabets based on selected rows
  const createHiraganaCardPool = () => {
    const hiraganaArray = [];

    selectedRows.map((selectedCharacter) => {
      hiraganaData.map((row) => {
        if (row.alphabetRow === selectedCharacter) {
          row.alphabetCharacters.map((character) => {
            hiraganaArray.push(character);
            return null;
          });
          return null;
        } else {
          return null;
        }
      });
      return null;
    });
    setHiraganaCardPool(hiraganaArray);
  };

  const createKatakanaCardPool = () => {
    const katakanaArray = [];

    selectedRows.map((selectedCharacter) => {
      katakanaData.map((row) => {
        if (row.alphabetRow === selectedCharacter) {
          row.alphabetCharacters.map((character) => {
            katakanaArray.push(character);
            return null;
          });
          return null;
        } else {
          return null;
        }
      });
      return null;
    });
    setKatakanaCardPool(katakanaArray);
  };

  // Clear cardpool and rows selected state
  const handleCardClear = () => {
    setHiraganaCardPool([]);
    setKatakanaCardPool([]);
  };

  return (
    // Adding all hiragana data and character state to useContext
    <CheckboxContext.Provider value={handleCheckboxChange}>
      <div className="app__container">
        <Header />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/hiragana-selector"
            element={
              <HiraganaSelector
                checkboxData={checkboxData}
                createHiraganaCardPool={createHiraganaCardPool}
                handleCardClear={handleCardClear}
              />
            }
          />
          <Route
            path="/katakana-selector"
            element={
              <KatakanaSelector
                checkboxData={checkboxData}
                handleCardClear={handleCardClear}
                createKatakanaCardPool={createKatakanaCardPool}
              />
            }
          />
          <Route
            path="/flashcard"
            element={
              <FlashCard
                hiraganaCardPool={hiraganaCardPool}
                katakanaCardPool={katakanaCardPool}
              />
            }
          />
        </Routes>
      </div>
    </CheckboxContext.Provider>
  );
}
