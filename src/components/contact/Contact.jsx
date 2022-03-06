import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="main">
        <h1>CONTACT</h1>
        <div className="page">
          <div className="pageHolder">
            <p>
              My email is{" "}
              <a href="mailto: miran.raznatovic@gmail.com"> here </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
