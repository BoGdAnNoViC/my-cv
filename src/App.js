import "./App.css";
import ExperienceComponent from "./ExperienceComponent";
import MiddleComponent from "./MiddleComponent";
import TopComponent from "./TopComponent";
import NewChapterComponent from "./NewChapterComponent";

function App() {
  return (
    <div className="main-container">
      <TopComponent />
      <div className="middle-container">
        <MiddleComponent />
        <div>
          <h2>My Experience</h2>
          <ExperienceComponent
            title={"Hospitality Manager at CatalanWays 08/2020 - 06/2021"}
            description={
              "-Prepare, reception, filing and classified control of documents with order.\n -Negotiation, contact and maintenance of +20 suppliers. \n -Informing and serving the public through various channels,ensuring their satisfaction."
            }
            ImgComponent={() => (
              <img
                className="imageStyle"
                src={require("./Hospitality Manager.png")}
                alt={"hospitalityManager-image"}
              />
            )}
          />
          <ExperienceComponent
            title={
              "Assistant F&B Manager at Sofitel Brussel Europe 05/2019 - 09/2019"
            }
            description={
              "-Collaboration with the marketing department in the realization of advertising events for the hotel.\n- Managing events and meetings together with the MICE team.\n-Maintain good relationship between different departments together with HR.\n-Managing, negotiating and maintaining +30 suppliers together with the head chef."
            }
            ImgComponent={() => (
              <img
                className="imageStyle"
                src={require("./Cooking.png")}
                alt={"hospitalityManager-image"}
              />
            )}
          />
          <ExperienceComponent
            title={
              "Internship in the F&B, Rooms and Kitchen department of the 4* Hotel Exe Campus 2017 (October) - 2018 (June)"
            }
            description={
              "Carrying out the main tasks necessary for the proper functioning of the hotel like: room cleaning, cooking, client reception, making reservations and helping with the marketing campaigns."
            }
            ImgComponent={() => (
              <img
                className="imageStyle"
                src={require("./Internship.png")}
                alt={"hospitalityManager-image"}
              />
            )}
          />
        </div>
        <hr></hr>
      </div>
      <NewChapterComponent />
    </div>
  );
}

export default App;
