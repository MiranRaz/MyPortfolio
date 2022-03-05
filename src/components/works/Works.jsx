import React, { useEffect, useState } from "react";
import "./Works.scss";
import WorksList from "../workslist/WorksList";

import {
  myWebSites,
  myGames,
  myResearch,
  myContacts,
} from "../myPortfolioLinks";

export default function Works() {
  const [selected, setSelected] = useState("webpages");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "webpages",
      title: "Webpages",
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
      id: "contact",
      title: "Contact",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "webpages":
        setData(myWebSites);
        break;
      case "games":
        setData(myGames);
        break;
      case "research":
        setData(myResearch);
        break;
      case "contact":
        setData(myContacts);
        break;
      default:
        setData(myWebSites);
    }
  }, [selected]);

  return (
    <div className="works" id="works">
      <h1>PROJECTS</h1>
      <ul>
        {list.map((item) => (
          <WorksList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.link} target="_blank">
            <div className="item">
              <img src={d.img} />
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
