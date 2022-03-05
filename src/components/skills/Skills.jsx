import "./Skills.scss";
import REACT from "../../img/logos/REACT.png";
import JS from "../../img/logos/JS.png";
import HTML from "../../img/logos/HTML.png";
import CSSS from "../../img/logos/CSSS.png";
import BOOTSTRAP from "../../img/logos/BOOTSTRAP.png";
import DOTNET from "../../img/logos/DOTNET.png";
import GIT from "../../img/logos/GIT.png";
import MSSQL from "../../img/logos/MSSQL.png";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>SKILLS</h1>
      <div className="contain">
        <ul>
          <li>
            <img src={REACT} alt="REACT" />
          </li>
          <li>
            <img src={JS} alt="JS" />
          </li>
          <li>
            <img src={HTML} alt="HTML" />
          </li>
          <li>
            <img src={CSSS} alt="CSSS" />
          </li>
          <li>
            <img src={BOOTSTRAP} alt="BOOTSTRAP" />
          </li>
          <li>
            <img src={DOTNET} alt="DOTNET" />
          </li>
          <li>
            <img src={GIT} alt="GIT" />
          </li>
          <li>
            <img src={MSSQL} alt="MSSQL" />
          </li>
        </ul>
      </div>
    </div>
  );
}
