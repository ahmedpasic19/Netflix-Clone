import { Link, NavLink } from "react-router-dom";

import logo from "../nefliximages/netflix-fulllogo.png"

export default function NavigationBar() {
  return (
    <div className="navbar">
      <nav>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <Link to="/browse">Home</Link>
          <Link to="/">Tv Shows</Link>
          <Link to="/">Movies</Link>
          <Link to="/">Latest</Link>
          <Link to="/">MyList</Link>
        </ul>
      </nav>
    </div>
  );
}
