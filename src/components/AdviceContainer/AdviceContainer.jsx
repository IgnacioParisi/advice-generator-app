import { Advice } from "../Advice/Advice";
import "../../components/index.css";
import { useEffect, useState } from "react";

export const AdviceContainer = () => {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);

  const apiCall = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((advice) => {
        setAdvice(advice);
        setLoading(false);
      });
  };

  useEffect(() => {
    apiCall();
  }, []);

  const handleClick = () => {
    apiCall();
  };

  return (
    <div className="main-container">
      {!loading && <Advice advice={advice} />}
      <div className="pattern-divider-container">
        <img
          className="pattern-divider-desktop"
          src="/images/pattern-divider-desktop.svg"
          alt="pattern-divider"
        />
        <img
          className="pattern-divider-mobile"
          src="/images/pattern-divider-mobile.svg"
          alt="pattern-divider"
        />
      </div>
      <div onClick={handleClick} className="dice-button-container">
        <img
          className="dice-button"
          src="/images/icon-dice.svg"
          alt="Dice icon"
        />
      </div>
    </div>
  );
};
