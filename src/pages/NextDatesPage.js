import React from "react";
import MainContainer from "../components/MainContainer/MainContainer";
import NextDates from "../components/nextDates/NextDates";


const NextDatesPage  = () => {


    return (
        <>
        <div className="basic-styles">
            <MainContainer  title="Próximas fechas" text="Conactate con el club de tu ciudad para adquirir los tickets, o mandanos un mail a amancay@gmail.com"  />
        </div>
            <NextDates />
        </>
    )
}

export default NextDatesPage;