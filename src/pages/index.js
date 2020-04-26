import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/construction.css";

export default () => (
  <div className="container">
    <section>
      <h1>Under construction</h1>
      <p>A new page is coming!</p>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/joaopedrofn/"
          target="_blank"
          title="LinkedIn"
        >
          <FontAwesomeIcon
            className="social-icon"
            icon={faLinkedin}
            size="lg"
          />
        </a>
        <a
          href="https://github.com/joaopedrofn/"
          target="_blank"
          title="Github"
        >
          <FontAwesomeIcon className="social-icon" icon={faGithub} size="lg" />
        </a>
        <a
          href="https://twitter.com/joaopedrofn/"
          target="_blank"
          title="Twitter"
        >
          <FontAwesomeIcon className="social-icon" icon={faTwitter} size="lg" />
        </a>
        <a
          href="https://profile.codersrank.io/user/joaopedrofn"
          target="_blank"
          title="CodersRank"
        >
          <span className="social-icon">CR</span>
        </a>
      </div>
    </section>
    <div className="img-panel">
      <FontAwesomeIcon icon={faCogs} className="largeIcon" />
    </div>
  </div>
);
