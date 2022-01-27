import React, { useState } from "react";
import image from "../images/organic-about-1.png";

const About = () => {
  const [read, setRead] = useState("");
  const [hide, sethide] = useState("Read More");

  const readMoreClickHandler = () => {
    hide === "Read More" ? sethide("Hide") : sethide("Read More");
    read === "" ? setRead("") : setRead("");
  };
  return (
    <div className="about">
      <div className="about-img">
        <img src={image} alt="img" />
      </div>
      <div className="about-text">
        <h3>
          Fresh Food,Simply<font>Delicious</font>
        </h3>
        <p>.{read}</p>

        <span className="about-btn" onClick={readMoreClickHandler}>
          {hide}
        </span>
      </div>
    </div>
  );
};
export default About;
