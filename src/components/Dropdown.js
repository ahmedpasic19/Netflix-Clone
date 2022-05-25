import { Link } from "react-router-dom";

export default function Dropdown() {
  return (
    <div className="dropdownMenu">
      <Link to="/browse" className="nav_Link">
        Home
      </Link>
      <Link to="/TVshows" className="nav_Link">
        Tv Shows
      </Link>
      <Link to="/movies" className="nav_Link">
        Movies
      </Link>
      <Link to="/latest" className="nav_Link">
        Latest
      </Link>
      <Link to="/mylist" className="nav_Link">
        MyList
      </Link>
    </div>
  );
}
