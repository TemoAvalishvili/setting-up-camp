import React, { useState, useEffect } from "react";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false);
    }, 5000);
  }, []);

  return (
    <div className="game-container">
      {showIntro && <GameIntro showIntro={showIntro} />}
      <BuildTent />
    </div>
  );
}

function GameIntro({ showIntro }) {
  const [isFaded, setIsFaded] = useState(false); // Separate state for fade effect

  useEffect(() => {
    // Update isFaded when showIntro changes
    setIsFaded(!showIntro);
  }, [showIntro]);

  return (
    <div className={`intro-container fade-in ${isFaded ? "show" : ""}`}>
      <h1>Welcome to the game!</h1>
      <h3>Enjoy your Journey!</h3>
    </div>
  );
}

function BuildTent() {
  return (
    <div className="campButton">
      <p className="flickering-text">Click to build a tent!</p>
      <img
        src={require("./images/tent.png")}
        className="tent"
        alt="tent"
        width="80"
        height="80"
      />
    </div>
  );
}
