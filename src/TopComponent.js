import "./App.css";
function TopComponent() {
  return (
    <div className="top-container">
      <img
        className="user-icon"
        src={require("./gamer icon.png")}
        alt={"user-icon"}
      />

      <img
        className="top-cloud"
        src={require("./cloud.png")}
        alt={"cloud-image"}
      />
      <h1>I'm Bogdan</h1>
      <h2>
        a web <span className="dev">dev</span>eloper
      </h2>
      <img
        className="bottom-cloud"
        src={require("./cloud.png")}
        alt={"cloud-image"}
      />
      <img
        className="mountain"
        src={require("./mountain.png")}
        alt={"mountain-image"}
      />
      <link rel="preconnect" href={"https://fonts.googleapis.com"}></link>
    </div>
  );
}

export default TopComponent;
