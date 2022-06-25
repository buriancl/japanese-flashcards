import React from "react";

//Import Styles
import "./Landing.css";

const Landing = () => {
  return (
    <section className="landing">
      <h1 className="landing__title">Japanese Alphabet Flashcards</h1>
      <p className="landing__text">
        Use this tool to study hiragana and katakana.
      </p>
      <p className="landing__text">Choose a script from the options above.</p>
    </section>
  );
};

export default Landing;
