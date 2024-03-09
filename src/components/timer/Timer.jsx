
import { useEffect, useRef, useState } from 'react';
import Countdown from 'react-countdown';
import "../../components/timer/timer.css"

const Counter = ({ props }) => <span>{props.seconds}</span>;

const Timer = ({ start, setStart, setShowPopup }) => {
  const timerRef = useRef();
  

  const handleEnd = () => {
    console.log("TERMINOOOOOOO----------", )
    setShowPopup(true)
    setStart(false);
    
  };

  useEffect(() => {
    if (start) {
      timerRef.current.start();
    }

    
  }, [start]);

  return (
    <div className="timer">
    <p>Tiempo:</p>
      <Countdown
        date={Date.now() + 60000}
        renderer={(props) => <Counter props={props} />}
        onComplete={handleEnd}
        autoStart={false}
        ref={timerRef}
      ></Countdown>
    </div>
  );
};

export default Timer;
