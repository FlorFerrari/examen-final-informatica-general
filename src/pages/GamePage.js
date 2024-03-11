import { React, useState } from "react";
import "../styles/styles.css";
import MainContainer from "../components/MainContainer/MainContainer";
import GameCards from "../components/game-cards/GameCards";
import Timer from "../components/timer/Timer";


const GamePage = () => {
  
  
  const [showPopup, setShowPopup] = useState(false); 
  const [start, setStart] = useState(false);

  const handleTimerEnd = () => {
    setShowPopup(true);
  };

  return (
    <section className="basic-styles">
        
      <MainContainer title="Jugá al memotest con amancay" text="Superá 120 puntos y ganate una Totebag de Amancay! Las reglas son sencillas: Encontrá la mayor cantidad de imagenes pares. Da vuelta primero una imagen y luego otra.
       Si las figuras no coinciden se volverán a dar vuelta en la misma ubicación que tenían. A medida que avances en el juego, el nivel de dificultad aumentará. TenÉs 60 segundos para jugar! Pro tip: A menor cantidad de clicks, mayor puntaje!" />

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
