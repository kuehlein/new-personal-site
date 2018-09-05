import React from "react";
import "./Home.css";

import resume from "../../assets/resume.pdf";
import resumeIcon from "../../assets/resume-icon.png";

const PdfToggle = ({ open }) =>
  open ? (
    <iframe src={resume} title="resume" className="resume" />
  ) : (
    <a className="point" href={resume}>
      <img className="icon" alt="resume" src={resumeIcon} />
    </a>
  );

export default PdfToggle;
