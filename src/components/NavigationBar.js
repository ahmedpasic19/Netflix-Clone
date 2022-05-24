import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../nefliximages/Logonetflix.png";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

export default function NavigationBar() {
  
  const [dropDownOpen, setdropDownOpen] = useState(false)

  const openMenu = () => {
    (dropDownOpen) ? setdropDownOpen(false) : setdropDownOpen(true)
  }

  const [user, setuser] = useState({})
  onAuthStateChanged(auth,(currentUser) => {
    setuser(currentUser)
  })

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
      <button>Logout</button>
      {user?.email}
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