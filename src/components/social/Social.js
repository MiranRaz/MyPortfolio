import React from "react";
import { Link } from "react-router-dom";
import "./Social.css";
function Social() {
  return (
    <section className="social-media">
      <div className="social-media-wrap">
        <div className="social-icons">
          <Link
            to=""
            className="social-icon-link linkedin"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </Link>

          <Link
            to=""
            className="social-icon-link github"
            target="_blank"
            aria-label="Github"
          >
            <i className="fab fa-github" />
          </Link>

          <Link
            to=""
            className="social-icon-link instagram"
            target="_blank"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Social;
