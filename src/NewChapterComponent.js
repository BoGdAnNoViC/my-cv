import "./App.css";
function NewChapterComponent() {
  return (
    <div className="bottom-container">
      <div className="new-chapter-header">
        <h2>New Chapter</h2>
      </div>
      <div className="info-languages">
        <p>
          Since February of this current year I started a knew chapter in my
          life and it's about learning how to became a programer. Since then I
          practiced some html5, css, bootstrap, javaScript and react, beeing the
          last one this that I'm focusing the most.
        </p>
      </div>
      <div className="language-icons">
        <img
          className="opera"
          src={require("./Opera.png")}
          alt={"opera-image"}
        />
        <img
          className="microsoftOffice"
          src={require("./Microsoft Office.png")}
          alt={"microsoftoffice-image"}
        />
        <img
          className="html5"
          src={require("./Html-5.png")}
          alt={"html5-image"}
        />
        <img className="css" src={require("./CSS.png")} alt={"css-image"} />
        <img
          className="bootstrap"
          src={require("./Bootstrap.png")}
          alt={"bootstrap-image"}
        />
        <img
          className="javaScript"
          src={require("./Java-Script.png")}
          alt={"javascript-image"}
        />
        <img
          className="react"
          src={require("./React.png")}
          alt={"react-image"}
        />
      </div>

      <div className="contact-me">
        <a className="btn" href="mailto:bogdannovic.5@email.com">
          CONTACT ME
        </a>
      </div>
      <div className="social-media">
        <a className="footer-link" href="https://www.linkedin.com/feed/">
          LinkedIn
        </a>
        <a className="footer-link" href="https://twitter.com/">
          Twitter
        </a>
        <a className="footer-link" href="https://www.appbrewery.co/">
          Website
        </a>
      </div>
      <p>© Bogdan Apetrei.</p>
    </div>
  );
}

export default NewChapterComponent;
