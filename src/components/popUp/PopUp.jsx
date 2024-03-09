import React from 'react'
import "../../components/popUp/popup.css"

export default function PopUp({ score, onClose }) {
  console.log("SCORE", score)
  return (
    <div className="popup">
      <div className="popup-content">
            <p>{score > 50 ? `¡Felicidades! Tu puntaje es de ${score}. Has ganado una totebag.` : `Esta vez no pudo ser. Juega de nuevo y obtén un puntaje mayor a 50 para ganar una totebag.`}</p>
            <button className="button-popup" onClick={onClose}>Cerrar</button>
            </div>
        </div>
  )
}
