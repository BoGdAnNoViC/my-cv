import "./App.css";
function ExperienceComponent({ title, description, ImgComponent }) {
  const newlineText = description.split("\n");
  return (
    <div className="skill-row">
      <div className="skill-container">
        <div className="img">
          <ImgComponent />
        </div>
        <div className="section-title">
          <h3>{title}</h3>
        </div>
      </div>
      {newlineText.map((text) => (
        <p>{text}</p>
      ))}
    </div>
  );
}

export default ExperienceComponent;
