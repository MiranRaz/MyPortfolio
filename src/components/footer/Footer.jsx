import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="contactFooter">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/miran-raznatovic/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon">
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MiranRaz"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon">
              <ion-icon name="logo-github"></ion-icon>
            </div>
          </a>
        </li>
        <li>
          <a href="mailto:miran.raznatovic@gmail.com">
            <div className="icon">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/korisniknijepronadjen"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
