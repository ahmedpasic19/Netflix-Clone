import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../nefliximages/Logonetflix.png";

import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

export default function NavigationBar() {
  const [dropDownOpen, setdropDownOpen] = useState(false)
  const [showLink, setshowLink] = useState("nav_Link")
  const [showBtn, setshowBtn] = useState()

  const openMenu = () => {
    (dropDownOpen) ? setdropDownOpen(false) : setdropDownOpen(true)
  }
  const [user, setuser] = useState({})
  onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser)
  })
  
  onAuthStateChanged(auth,(currentUser) => {
    if(currentUser) {
      setshowLink("nav_Link")
    } else {
      setshowLink("hidden")
    }
  })

  function dropdownMenu (){
  
    return (
      <div className="dropdownMenu">
        <Link to="/browse" className="nav_Link">Home</Link>
        <Link to="/TVshows" className="nav_Link">Tv Shows</Link>
        <Link to="/movies" className="nav_Link">Movies</Link>
        <Link to="/latest" className="nav_Link">Latest</Link>
        <Link to="/mylist" className="nav_Link">MyList</Link>
      </div>
    )
  }
  
  return (
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
        <div className="h-10 text-white">{user?.email}</div>
      <button className="resBtn" onClick={openMenu}>Menu</button>
      {(dropDownOpen) ? dropdownMenu() : ""}
    </div>
  );
}

