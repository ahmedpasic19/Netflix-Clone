import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../nefliximages/Logonetflix.png";

import { auth } from "../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "../pages/Login";

export default function NavigationBar() {
  
  const [dropDownOpen, setdropDownOpen] = useState(false)

  const openMenu = () => {
    (dropDownOpen) ? setdropDownOpen(false) : setdropDownOpen(true)
  }

  const logout = async() => {
    await signOut(auth)
  }

  const [user, setuser] = useState({})
  onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser)
    console.log(user)
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
        <button onClick={() => {logout()}} className="px-3 bg-red-600 rounded">Log out</button>
      </ul>
        <div className="h-10 text-white">{user?.email}</div>
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