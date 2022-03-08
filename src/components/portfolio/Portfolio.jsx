import React, { useState, useEffect } from "react";
import "./Portfolio.scss";

import CLDS from "../../vid/CLDS.mp4";

import PortfolioList from "../portfolioList/PortfolioList";
import {
  MyWebsites,
  MyGames,
  MyResearch,
  MySkills,
  MyContact,
} from "../../MyPortfolio";

export default function Portfolio() {
  const [selected, setSelected] = useState("websites");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "websites",
      title: "Websites",
    },
    {
      id: "games",
      title: "Games",
    },
    {
      id: "research",
      title: "Research",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "websites":
        setData(MyWebsites);
        break;
      case "games":
        setData(MyGames);
        break;
      case "research":
        setData(MyResearch);
        break;
      case "skills":
        setData(MySkills);
        break;
      case "contact":
        setData(MyContact);
        break;
      default:
        setData(MyWebsites);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <div className="mainVideo">
        <video src={CLDS} autoPlay loop muted type="video/mp4" alt="video" />
        <div className="bckgrnd">
          <div className="wrapper">
            <h1>Portfolio</h1>
            <ul>
              {list.map((item) => (
                <PortfolioList
                  title={item.title}
                  active={selected === item.id}
                  setSelected={setSelected}
                  id={item.id}
                />
              ))}
            </ul>
            <div className="container">
              {data.map((d) => (
                <a href={d.href} target="_blank" rel="noreferrer">
                  <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
