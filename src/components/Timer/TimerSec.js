import React, { useState, useEffect } from "react";
import skip from '../../images/skip.svg';
import play from '../../images/play.svg';
import more from '../../images/threeDots.svg';
import pause from '../../images/pause.png';
import Settings from "../Settings/Setting";

function TimerSec(props) {
  const [startTimer, setStartTimer] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);

  const [settingOn, setSettingsOn] = useState(false);

  function showSettings(){
    setSettingsOn(!settingOn);
  }

  //Timer
  useEffect(() => {
    if (startTimer === true) {
      let interval = setInterval(() => {
        clearInterval(interval);

        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let minutes = displayMessage ? 24 : 4;
            let seconds = 59;

            setSeconds(seconds);
            setMinutes(minutes);

            setDisplayMessage(!displayMessage);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }, [seconds, startTimer]);

  //Button style, and display style
  const style = {
    buttonPlay: {
      color: "white",
      backgroundColor: "#FF4C4C",
      width: "128px",
      height: "96px",
      borderRadius: "32px",
      border: "none",
      margin: "0 10px"
    },
    button: {
      color: "white",
      backgroundColor: "#270C0C",
      width: "80px",
      height: "80px",
      borderRadius: "32px",
      border: "none",
    },
    timerMinutes: {
      fontSize: "300px",
      padding: "0",
      margin: "-30px",
    },
    timerSeconds: {
      fontSize: "300px",
      padding: "0",
      marginTop: "-100px",
    },
    timerBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  //Functions to make sure the timer displays two int when number is less than 10
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <>
      <div className="displayTimer" style={style.timerBox}>
        <div className="displayMinutes" style={style.timerMinutes}>
          {timerMinutes}
        </div>
        <div className="displaySeconds" style={style.timerSeconds}>
          {timerSeconds}
        </div>
        <div className="buttons">
          <button onClick={showSettings} style={style.button}>
            <img src={more} alt="more" />
          </button>
          {settingOn ? <Settings /> : ""}
          <button onClick={() => setStartTimer(!startTimer)} style={style.buttonPlay}>
            {startTimer ?  <img src={pause} alt="pause" /> : <img src={play} alt="play" />}
          </button>
          <button onClick={() => setStartTimer(true)} style={style.button}>
            <img src={skip} alt="skip" />
          </button>
        
        </div>
      </div>
    </>
  );
}

export default TimerSec;
