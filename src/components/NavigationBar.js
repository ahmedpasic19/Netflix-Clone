import { Link, NavLink } from "react-router-dom";

import logo from "../nefliximages/Logonetflix.png";

export default function NavigationBar() {
  return (
    <div className="navbar">
      <div className="logo_wraper">
        <img src={logo} alt="logo" className="logo"/>
      </div>
      <ul className="nav_links">
        <Link to="/browse" className="nav_Link">Home</Link>
        <Link to="/" className="nav_Link">Tv Shows</Link>
        <Link to="/" className="nav_Link">Movies</Link>
        <Link to="/" className="nav_Link">Latest</Link>
        <Link to="/" className="nav_Link">MyList</Link>
      </ul>
    </div>
  );
}
