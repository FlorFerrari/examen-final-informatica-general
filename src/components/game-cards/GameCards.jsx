import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { getImages } from '../../helpers/getImages'

import amancay from "../../img/game/amancay-game.jpg"
import "../../components/game-cards/game.css"
import PopUp from "../popUp/PopUp"

//variables globales: cantidad de cartas, cantidas de clicks y nivel
let size = 3; 
let clicks = 0;
let level = 1;

export default function GameCards({start, showPopup, setShowPopup}) {

    //react hooks para almacenar y modificar el estado
    const [images, setImages] = useState(getImages(size))  //el estado images almacena las imagenes del juego
    const [selected, setSelected] = useState([]) // selected almacena las cartas seleccionadas por el usuario
    const [opened, setOpened] = useState([]) //opened almacena las cartas que fueron emparejadas

    const score = useRef(0); //hook para almacener el puntaje del juego y evitar re-renders innecesarios constantemente


    const handleClick = (item) => {
        if (start) {
            clicks = clicks + 1;
            if (selected.length < 2 ) {
            setSelected(selected => selected.concat(item)) //las cartas seleccionadas se unen en mi nuevo array
            }
        }
    }


    useEffect(() => {
        if (selected.length === 2){ //cuando ya hay dos cartas seleccionadas, se  chequea si son iguales
            if(selected[0].split('|')[1] === selected[1].split('|')[1]){ // se hace la comparacion despues del | : x ej: 1|abuk === 2|abuk
                setOpened(opened => opened.concat(selected)) // si las comparacion es verdadera se concatena el array selected a opened. devuelve un unico array
            }
            setTimeout(() => setSelected([]), 600) //se reestablece la seleccion en un array vacio despues de 6 milisegundos
            
        }
    }, [selected])  // cada vez que el estado selected cambia, se ejecuta el hook useEffect. se comprueba 
                    //si las dos cartas seleccionadas coinciden y, si es así, se añaden a las cartas abiertas a opened.


    useEffect(() => {
        if(opened.length === images.length) { //si se dieron vueltas todas las cartas del nivel
            calculateScore()                  // se calcula el puntaje
            size = size +2;                   //  aumenta el nive, y por ende la cantidad de cartas
            clearArrays()                     // los arrays se vacian y comienza el nuevo nivel
            setImages(getImages(size))        // se obtienen las nuevas cartas teniendo en cuenta el nuevo nivel y la nueva cantidad de cartas

            level = level + 1;
        }
    }, [opened, images.length]) 

    const clearArrays = () => {
        setOpened([]);
        setSelected([]);   
    }

    // con la funcion de calculateScore se analiza el rendimiento del usuario, teniendo en cuenta cantidad de cartas y clicks, y asi sumandole mayor o menor cantidad de puntos
    const calculateScore = () => {
        const passLevel = size * 5; //valor que se utiliza para sumar el puntaje, cada vez que se pasa de nivel se mutiplica la cantidad de cartas * 5
        let total = score.current; 
        const cards = size * 2; //variable que contiene la cantidad de cartas, se multiplica por 2 porque son dos cartas x imagen
        if (clicks === cards) {
            total = total + (cards * 2) + passLevel
        } else if(clicks > cards && clicks < cards + 10){
            total = total + cards + passLevel
        } else if(clicks > cards + 10 && clicks < cards + 15) {
            total = total + cards / 2 + passLevel
        } else {
            total = total + Math.round(cards / 3) + passLevel
        }

        clicks = 0; //se reinicia el valor de clicks para comenzar el nuevo nivel
        score.current = total; // se actualiza el score actual
    }


    let include = false;

  return (
    <div className="game-cards">
        <h2 className='puntaje'>Puntaje: {score.current}</h2>

        <ul className='game-ul'>

        
        {
            images.map((item, index) => (
                <li className="game-li" key={index} onClick={() => handleClick(item, index)}>
                    <div className="content">

                        {include = selected.includes(item) || opened.includes(item)} {/* si item se encuentra dentro de selected u opened, include = true */}
                       
    
                        <div className={`front ${include ? 'flip-front' : ''  }`}> {/* si include es true se aplica la clase flip-front y se da vuelta la imagen */}
                            <img src={amancay} alt="icon" />
                        </div>

                        <div className={`back ${include ? 'flip-back' : ''  }`}> {/* si include es true se muestra la foto, se aplica el classname back flip back */}
                            <img src={item.split('|')[1]} alt="icon" />
                        </div>   
                    </div>
                </li>
            ))
        }

        </ul>
         {showPopup ? (
        <PopUp score={score.current} onClose={() => { setShowPopup(false); window.location.reload(); }} />
      ) : ""} 
    </div>
  )
}

