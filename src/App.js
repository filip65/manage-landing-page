import "./App.scss";

import Navbar from "./Components/Navbar";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// images
import graphsImage from "./images/illustration-intro.svg";

function App() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 993 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 992, min: 769 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

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

        <div className="reviews">
          <h2>What they’ve said</h2>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            responsive={responsive}
            showDots
            sliderClass=""
            slidesToSlide={1}
            // swipeable
          >
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "./avatar-anisha.png"}
                alt=""
              />
              <h6>Anisha Li</h6>
              <p>
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>

            <div className="card">
              <img src={process.env.PUBLIC_URL + "./avatar-ali.png"} alt="" />
              <h6>Ali Bravo</h6>
              <p>
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>

            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "./avatar-richard.png"}
                alt=""
              />
              <h6>Richard Watts</h6>
              <p>
                “Manage allows us to provide structure and process. It keeps us
                organized and focused. I can’t stop recommending them to
                everyone I talk to!”
              </p>
            </div>

            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "./avatar-shanai.png"}
                alt=""
              />
              <h6>Shanai Gough</h6>
              <p>
                “Their software allows us to track, manage and collaborate on
                our projects from anywhere. It keeps the whole team in-sync
                without being intrusive.”
              </p>
            </div>
          </Carousel>
          <button className="button">Get started</button>
        </div>
      </div>
    </div>
  );
}

export default App;
