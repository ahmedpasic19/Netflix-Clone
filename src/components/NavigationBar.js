import { Link } from "react-router-dom";
import { useState } from "react";

import { auth } from "../Firebase-config";
import { signOut } from "firebase/auth";

import logo from "../nefliximages/Logonetflix.png";


export default function NavigationBar() {


  const logout = async() => {
    await signOut(auth)
    console.log("user logged out")
  }

  
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
      <button onClick={logout} className=" bg-red-600 px-3 rounded">Log out</button>
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