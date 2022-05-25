import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../nefliximages/Logonetflix.png";

import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

export default function NavigationBar() {
  const [showLink, setshowLink] = useState("nav_Link")
  const [showBtn, setshowBtn] = useState()

  
  // CHECKS IF USER IS LOGGED AND SHOWS/HIDES lg NAVBAR LINKS
  onAuthStateChanged(auth,(currentUser) => {
    if(currentUser) {
      setshowLink("nav_Link")
      setshowBtn("resBtn")
    } else {
      setshowLink("hidden")
      setshowBtn("hidden")
    }
  })
  
  // REGULAR NAVIGATION BAR
  return (
    <div>
      {/* NAVBAR FOR lg SCRENS */}
    <div className="navbar">
      <Link className="logo_wraper" to="/browse" >
        <img src={logo} alt="logo" className="logo"/>
      </Link>
      <ul className="nav_links">
        <Link to="/browse" className={showLink}>Home</Link>
        <Link to="/TVshows" className={showLink}>Tv Shows</Link>
        <Link to="/movies" className={showLink}>Movies</Link>
        <Link to="/latest" className={showLink}>Latest</Link>
        <Link to="/mylist" className={showLink}>MyList</Link>
      </ul>
      <p>LG navbar</p>
      <button className={showBtn}>Menu</button>
    </div>

    {/* NAVBAR FOR sm SCREENS */}
    <div className="sm_navbar">
      <Link className="logo_wraper" to="/browse" >
        <img src={logo} alt="logo" className="logo"/>
      </Link>
      <ul className="nav_links">
        <Link to="/browse" className={showLink}>Home</Link>
        <Link to="/TVshows" className={showLink}>Tv Shows</Link>
        <Link to="/movies" className={showLink}>Movies</Link>
        <Link to="/latest" className={showLink}>Latest</Link>
        <Link to="/mylist" className={showLink}>MyList</Link>
      </ul>
      <p>SM navbar</p>
      <button className={showBtn}>Menu</button>
    </div>



    </div>
  );
}
