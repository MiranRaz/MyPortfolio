import "./SideMenu.scss";
import { Link } from "react-router-dom";

export default function SideMenu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/MyPortfolio/">home</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/MyPortfolio/portfolio">portfolio</Link>
        </li>
      </ul>
    </div>
  );
}
