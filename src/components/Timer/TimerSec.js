import React, { useState, useEffect } from "react";
import skip from "../../images/skip.svg";
import play from "../../images/play.svg";
import more from "../../images/threeDots.svg";
import pause from "../../images/pause.png";
import "../../App.css";
//import Settings from "../Settings/Setting";

function TimerSec() {
  const [startTimer, setStartTimer] = useState(false);
  const [pomodoro, setPomodoro] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [settingOn, setSettingsOn] = useState(false);
  //const [rest, setRest] = useState(4);
  const [breakOn, setBreakOn] = useState(true)

  function showSettings() {
    setSettingsOn(!settingOn);
  }

  function changePomodoro(event){
    setPomodoro(event.target.value);
    setSeconds(0);
  }

  //Timer
  useEffect(() => {

    if (startTimer === true) {
      let interval = setInterval(() => {
        clearInterval(interval);

        if (seconds === 0) {
          if (pomodoro !== 0) {
            setSeconds(59);
            setPomodoro(pomodoro - 1);
            
          } else {
              console.log(breakOn)
              {breakOn ?  setPomodoro(4): setPomodoro(24)}

              setBreakOn(!breakOn);
              setSeconds(59)
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 10);
    }
  }, [seconds, startTimer, breakOn]);

  //Functions to make sure the timer displays two int when number is less than 10
  const timerMinutes = pomodoro < 10 ? `0${pomodoro}` : pomodoro;
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
          <button onClick={showSettings} style={style.button} disabled={true}>
            <img src={more} alt="more" />
          </button>
          {settingOn ? (
            <div className="settings" style={style.settings}>
              <p>Pomodoro</p>
              <input
                type="number"
                min={15}
                max={55}
                onChange={changePomodoro}
              ></input>
              <p>Break</p>
              <input
                type="number"
                min={4}
                max={25}
              ></input>
            </div>
          ) : (
            ""
          )}
          <button
            onClick={() => setStartTimer(!startTimer)}
            style={style.buttonPlay}
            id="buttonPlay"
          >
            {startTimer ? (
              <img
                src={pause}
                alt="pause"
                style={{ height: "22px", width: "26px" }}
              />
            ) : (
              <img
                src={play}
                style={{ height: "22px", width: "26px" }}
                alt="play"
              />
            )}
          </button>
          <button onClick={() => setStartTimer(true)} style={style.button} disabled={true}>
            <img src={skip} alt="skip" />
          </button>
        </div>
      </div>
    </>
  );
}

//Button style, and display style
const style = {
  buttonPlay: {
    color: "white",
    backgroundColor: "#FF4C4C",
    width: "128px",
    height: "96px",
    borderRadius: "32px",
    border: "none",
    margin: "0 10px", 
    cursor: "pointer"
  },
  button: {
    color: "white",
    backgroundColor: "Gray",
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
  settings: {
    backgroundColor: "red",
    position: "absolute",
    height: "160px",
    width: "250px",
    top: "63%",
    borderRadius: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
};

export default TimerSec;
