import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from "../nefliximages/Logonetflix.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showLink, setshowLink] = useState()
  const [showBtn, setshowBtn] = useState()

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
    <div className='navbar'>
        <Link className='logo_wraper' to="/browse">
          <img src={logo} className="logo"/>
        </Link>
      <ul>
        <Link to="/browse" className={showLink}>Home</Link>
        <Link to="/TVshows" className={showLink}>Tv Shows</Link>
        <Link to="/movies" className={showLink}>Movies</Link>
        <Link to="/latest" className={showLink}>Latest</Link>
        <Link to="/mylist" className={showLink}>MyList</Link>
      </ul>
      <div onClick={handleNav} className={showBtn}>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 text-white bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-white m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;