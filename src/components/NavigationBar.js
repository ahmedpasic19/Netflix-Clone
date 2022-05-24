import { Link } from "react-router-dom";
import { useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase-config";

import logo from "../nefliximages/Logonetflix.png";


export default function NavigationBar() {

  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      console.log(currentUser)
    } else {
      console.log("No user logged in")
    }
  })

  const [dropDownOpen, setdropDownOpen] = useState(false)

  const openMenu = () => {
    (dropDownOpen) ? setdropDownOpen(false) : setdropDownOpen(true)
  }

  return (
    <div className="navbar">
      <Link className="logo_wraper" to="/browse" >
        <img src={logo} alt="logo" className="logo"/>
      </Link>
      <ul className="nav_links">
        <Link to="/browse" className="nav_Link">Home</Link>
        <Link to="/" className="nav_Link">Tv Shows</Link>
        <Link to="/" className="nav_Link">Movies</Link>
        <Link to="/" className="nav_Link">Latest</Link>
        <Link to="/" className="nav_Link">MyList</Link>
      </ul>
      <button className="resBtn" onClick={openMenu}>Menu</button>
      {(dropDownOpen) ? dropdownMenu() : ""}
    </div>
  );
}

function dropdownMenu (){
  return (
    <div className="dropdownMenu">
      <Link to="/browse" className="nav_Link">Home</Link>
      <Link to="/" className="nav_Link">Tv Shows</Link>
      <Link to="/" className="nav_Link">Movies</Link>
      <Link to="/" className="nav_Link">Latest</Link>
      <Link to="/" className="nav_Link">MyList</Link>
    </div>
  )
}