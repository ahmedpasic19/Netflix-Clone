import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../nefliximages/Logonetflix.png";

import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import Dropdown from "./Dropdown";


export default function NavigationBar() {
  const [dropDownOpen, setdropDownOpen] = useState(false)
  const [showLink, setshowLink] = useState("nav_Link")
  const [showBtn, setshowBtn] = useState()
 
  const openMenu = () => {
    (dropDownOpen) ? setdropDownOpen(false) : setdropDownOpen(true)
  }
  
  
  onAuthStateChanged(auth,(currentUser) => {
    if(currentUser) {
      setshowLink("nav_Link")
    } else {
      setshowLink("hidden")
    }
  })

  // HAMBUREGER MENU 
const dropdownMenu = () => {
  for(let i = 0; i >= 1 ; i++) {
    return <Dropdown />
  }
}

  
  // REGULAR NAVIGATION BAR
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
      <button className="resBtn" onClick={openMenu}>Menu</button>
      {(dropDownOpen) ? dropdownMenu() : console.log("menu CLOSED")}
    </div>
  );
}
