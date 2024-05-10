import { useState } from "react";

/*
Settings need: 
    Set Pomodoro time and break time
    Store props
    Pass it down clock
*/


function Settings() {
    const [pomodoro, setPomodoro] = useState();

  return (
    <div className="settings" style={style.settings}>
      <p>Pomodoro</p>
      <input></input>
      <p>Break</p>
      <input></input>
    </div>
  );
}

const style = {
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

export default Settings;
