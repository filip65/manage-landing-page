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

        <div className="differences-part">
          <div className="differences-part__question">
            <h2>What’s different about Manage?</h2>
            <p>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div className="differencies">
            <ol className="differencies__items">
              <li className="differencies__item">
                <div className="header">
                  <p className="number">01</p>
                  <h3>Track company-wide progress</h3>
                </div>
                <p>
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </li>

              <li className="differencies__item">
                <div className="header">
                  <p className="number">02</p>
                  <h3>Advanced built-in reports</h3>
                </div>
                <p>
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </li>

              <li className="differencies__item">
                <div className="header">
                  <p className="number">03</p>
                  <h3>Everything you need in one place</h3>
                </div>
                <p>
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
