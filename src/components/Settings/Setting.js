const style = {
  settings: {
    backgroundColor: "red",
    position: "absolute",
    height: "160px",
    width: "250px",
    top: "480px",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

function Settings() {
  return (
    <div className="settings" style={style.settings}>
      <h1>Settings</h1>
    </div>
  );
}

export default Settings;
