import "./App.scss";

import Navbar from "./Components/Navbar";

// images
import graphsImage from "./images/illustration-intro.svg";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Navbar />

        <div className="intro">
          <div className="intro__graphs">
            <img src={graphsImage} alt="" />
          </div>
          <div className="intro__text">
            <h1>Bring everyone together to build better products.</h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="button">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
