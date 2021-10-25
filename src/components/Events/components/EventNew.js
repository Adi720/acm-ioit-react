import React from "react";
import "./EventNew.css";

const leftImage = (props) => {
  return (
    <div className="about-area">
      <div style={{ margin: "0px" }} className="container">
        <div className="row align-items-center mt-5">
          <div className="col-lg-12 div-box">
            <div className="about-image wow" data-wow-duration="1s">
              <img src={props.link} alt="About" />
            </div>
          </div>
          <div className="col-lg-12 div-box">
            <div className="about-content wow" data-wow-duration="1s">
              <div className="section-title">
                <h2 className="title">{props.title}</h2>
              </div>

              <p className="text">{props.descShort}</p>
              <p className="date">
                <span>{props.date}</span> [{props.timing}]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Event(props) {
  // if (media.matches) return leftImage(props);
  return leftImage(props);
}

// const media = window.matchMedia("(max-width: 800px)");
// media.addEventListener("change", () => window.location.href = "/Events/");

export default Event;