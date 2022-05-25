import { Link } from "react-router-dom"
import logo from "../nefliximages/Logonetflix.png";

import { useState } from "react";

import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { calculateBackoffMillis } from "@firebase/util";

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
    // CHECKS IF USER IS LOGGED AND SHOWS/HIDES lg NAVBAR LINKS
    const [showLink, setshowLink] = useState()
    const [showBtn, setshowBtn] = useState()
    const [nav, setNav] = useState(false);

    onAuthStateChanged(auth,(currentUser) => {
        if(currentUser) {
          setshowLink("nav_Link")
          setshowBtn("resBtn")
        } else {
          setshowLink("hidden")
          setshowBtn("hidden")
        }
      })

    const handleNav = () => {
        setNav(!nav);
    };
    

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
     
      <div onClick={handleNav} className={showBtn}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      
    
    
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <Link className="logo_wraper" to="/browse" >
            <img src={logo} alt="logo" className="logo"/>
        </Link>
        <Link to="/browse" className={showLink}>Home</Link>
        <Link to="/TVshows" className={showLink}>Tv Shows</Link>
        <Link to="/movies" className={showLink}>Movies</Link>
        <Link to="/latest" className={showLink}>Latest</Link>
        <Link to="/mylist" className={showLink}>MyList</Link>
      </ul>

    </div>
    );
};

export default NavBar