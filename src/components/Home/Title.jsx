import React, { Component } from "react";
import "./Home.css";
import PdfToggle from "./PdfToggle";

import emailIcon from "../../assets/email-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import githubIcon from "../../assets/github-icon.png";

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div className="header">
        <h1 className="title">kyle uehlein</h1>
        <div className="pad-links">
          <div className="format-contact">
            <PdfToggle open={this.state.open} handlePdf={this.handlePdf} />
            <a className="point" href="mailto:kyleuehlein@gmail.com">
              <img className="icon" alt="email" src={emailIcon} />
            </a>
            <a className="point" href="tel:908-280-1935">
              <img className="icon" alt="phone" src={phoneIcon} />
            </a>
          </div>
          <div className="format-social">
            <a
              className="point"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/kyle-uehlein/"
            >
              <img className="icon" alt="linkedin" src={linkedinIcon} />
            </a>
            <a
              className="point"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/kuehlein/"
            >
              <img className="icon" alt="github" src={githubIcon} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
