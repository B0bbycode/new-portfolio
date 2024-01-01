import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I currently serve as a <b>Software Development Engineer</b> at <a href="https://www.linconwavesinnovation.com/">Linconwaves Innovation</a>, 
        where my role revolves around crafting the next generation of software solutions. I contribute to 
        innovative projects that push the boundaries of technology, working collaboratively with a dynamic 
        team to create impactful software experiences.
      </p>
    );
    const two = (
      <p>
        Outside the realm of coding, I derive pleasure from exploring the captivating worlds of novels,
        engaging in video games and board games.
      </p>
    );

    const tech_stack = [
      "Typescript",
      "Node.js",
      "React.js",
      "Next.js",
      "Mongoose",
      "ScyllaDB",
      "Javascript ES6+",
      "C++"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Techstacks I work with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Chris Grey" src={"/assets/me.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
