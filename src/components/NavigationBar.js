import { Link } from "react-router-dom"
import logo from "../nefliximages/Logonetflix.png"
import { useState } from "react"

import { auth } from "../firebase-config"
import { onAuthStateChanged } from "firebase/auth"

const NavigationBar = () => {
    const [toggle, settoggle] = useState(false)
    const [showLink, setshowLink] = useState()
    const [loadBtn, setLoadBtn] = useState()

    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setshowLink("link")
        setLoadBtn("menuBtn")
      } else {
        setshowLink("hidden")
        setLoadBtn("hidden")
      }
    })

    const toggleMenu = ()=> {
        settoggle(!toggle)
    }


  return (
    <nav className='navbar'>
        <div className='lg-navbar'>
            <Link className="logo-wrapper" to="/browse">
                <img src={logo} className="logo"/>
            </Link>
            <ul className="link-wrapper">
                <Link to="/browse" className={showLink}>Home</Link>
                <Link to="/TVshows" className={showLink}>TV shows</Link>
                <Link to="/movies" className={showLink}>Movies</Link>
                <Link to="/latest" className={showLink}>Latest</Link>
                <Link to="/mylist" className={showLink}>My List</Link>
            </ul>
        </div>
        
        <div className="sm-navbar">
            <div className="logo-wrapper">
                <img src={logo} className="logo"/>
            </div>
            {toggle && (
            <ul className="sm-link-wrapper">
                <Link to="/browse" className={showLink}>Home</Link>
                <Link to="/TVshows" className={showLink}>TV shows</Link>
                <Link to="/movies" className={showLink}>Movies</Link>
                <Link to="/latest" className={showLink}>Latest</Link>
                <Link to="/mylist" className={showLink}>My List</Link>
            </ul>
            )}
            <div className={loadBtn} onClick={toggleMenu}>
            Menu
            </div>
        </div>
    </nav>
  )
}

export default NavigationBar