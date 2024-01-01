import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"Hi, "}
            <span className="intro-name">{"Grey"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">Shaping the world with software</div>
          <div className="intro-desc">
            As a software engineer hailing from Nigeria, my fervor lies in crafting impactful solutions
            tailored for businesses. I excel in the art of developing software that not only optimizes 
            operational efficiency but also plays a pivotal role in fostering the growth and success 
            of organizations
          </div>
          <a
            href="mailto:olalekan@linconwaves.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" Say hello!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
