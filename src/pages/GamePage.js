import React from "react";
import "../styles/styles.css"
import MainContainer from "../components/MainContainer/MainContainer";
import GameCards from "../components/game-cards/GameCards";
import Timer from "../components/timer/Timer";

const GamePage  = () => {

    
    return (
        <section className="basic-styles">
            <MainContainer title="juga al memotest con amancay" text="ganate una totebag" />
            <Timer />
            <GameCards />
           
        </section>
    )
}

export default GamePage;