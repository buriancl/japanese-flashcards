import React, { useState, useEffect } from "react";

//Import dependencies
import Flippy, { FrontSide, BackSide } from "react-flippy";

// Import styles
import "./FlashCard.css";

const FlashCard = ({ hiraganaCardPool, katakanaCardPool }) => {
  const [cardPool, setCardPool] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);

  // Create state to display card data on flashcard
  const [drawnCard, setDrawnCard] = useState({
    character: "",
    phonetic: "",
  });

  useEffect(() => {
    const alphabetArray = hiraganaCardPool.concat(katakanaCardPool);
    setCardPool(alphabetArray);
  }, []);

  // Function picks a random character from array and sets it as the flashcard
  const grabRandomCard = () => {
    const random = cardPool[Math.floor(Math.random() * cardPool.length)];
    setDrawnCard({ character: random.character, phonetic: random.phonetic });
  };

  return (
    <section className="flashcard">
      {drawnCard.character ? (
        <Flippy
          className="flashcard__card"
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal"
          isFlipped={isFlipped}
        >
          <FrontSide className="flashcard__cardFront">
            {drawnCard.character}
          </FrontSide>
          <BackSide className="flashcard__cardBack">
            {drawnCard.phonetic}
          </BackSide>
        </Flippy>
      ) : null}
      <button className="drawCardBtn" onClick={grabRandomCard}>
        Draw New Card
      </button>
    </section>
  );
};

export default FlashCard;
