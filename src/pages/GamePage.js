

import { React, useState } from "react";
import "../styles/styles.css";
import MainContainer from "../components/MainContainer/MainContainer";
import GameCards from "../components/game-cards/GameCards";
import Timer from "../components/timer/Timer";


const GamePage = () => {
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false); 
  const [start, setStart] = useState(false);

  const handleTimerEnd = () => {
    setShowPopup(true);
  };

  return (
    <section className="basic-styles">
        
      <MainContainer title="juga al memotest con amancay" text="ganate una totebag" />

      <div className="game-section">

            <Timer start={start} setStart={setStart} onTimerEnd={handleTimerEnd} setShowPopup={setShowPopup}  />

            
                {!start ? (
                <button className="boton-comenzar" onClick={() => setStart(true)}>Comenzar</button>
                ) : (
                <button className="boton-reiniciar" onClick={() => window.location.reload()}>Reiniciar</button>
                )}
            

            <GameCards start={start} setShowPopup={setShowPopup} showPopup={showPopup} />
      </div>
    </section>
  );
};

export default GamePage;
