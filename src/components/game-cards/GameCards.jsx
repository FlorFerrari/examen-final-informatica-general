import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { getImages } from '../../helpers/getImages'

import amancay from "../../img/game/amancay-game.jpg"
import "../../components/game-cards/game.css"

let size = 3;
let clicks = 0;
let level = 1;

export default function GameCards() {

    const [images, setImages] = useState(getImages(size))
    const [selected, setSelected] = useState([])
    const [opened, setOpened] = useState([])

    const score = useRef(0);
    

    const handleClick = (item, index) => {
        clicks = clicks +1;
        if (selected.length < 2 ) {
            setSelected(selected => selected.concat(item))
        }
  
    }

    useEffect(() => {
        if (selected.length === 2){
            if(selected[0].split('|')[1] === selected[1].split('|')[1]){
                setOpened(opened => opened.concat(selected))
            }
            setTimeout(() => setSelected([]), 900)
            
        }
    }, [selected])

    

    useEffect(() => {
        if(opened.length === images.length) {
            calculateScore()
            size = size +2;
            clearArrays()
            setImages(getImages(size))

            level = level+1;
        }
    }, [opened]) 

    const clearArrays = () => {
        console.log("holaaa")
        setOpened([]);
        setSelected([]);
        
        
    }

    const calculateScore = () => {
        const passLevel = size * 10;
        let total = score.current;
        const cards = size * 2;
        if (clicks === cards) {
            total = total + (cards * 2) + passLevel
        } else if(clicks > cards && clicks < cards + 5){
            total = total + cards + passLevel
        } else if(clicks > cards + 5 && clicks < cards + 10) {
            total = total + cards / 2 + passLevel
        } else {
            total = total + Math.round(cards / 3) + passLevel
        }
        clicks = 0;
        score.current = total;
    }

    console.log("opened.length---->", opened.length)
    console.log("images.lenght---->", images.length)
    
    let include = false;


    console.log("selected--->", selected)
    console.log("opened--->", opened)


  return (
    <div className="game-cards">
        <h2>Score: {score.current}</h2>
        <h2>Nivel: {+ level}</h2>

        <ul>

        
        {
            images.map((item, index) => (
                <li key={index} onClick={() => handleClick(item, index)}>
                    <div className="content">
                        {include = selected.includes(item) || opened.includes(item)} 
                        <div className={`front ${include ? 'flip-front' : ''  }`}>
                            <img src={amancay} alt="icon" />
                        </div>
                        <div className={`back ${include ? 'flip-back' : ''  }`}>
                            <img src={item.split('|')[1]} alt="icon" />
                        </div>
                    </div>

                </li>
            ))
        }

        </ul>
    </div>
  )
}

