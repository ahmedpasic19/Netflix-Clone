import { Link } from "react-router-dom"
import logo from "../nefliximages/Logonetflix.png"
import { useState } from "react"

const NavigationBar = () => {
    const [toggle, settoggle] = useState(false)
    
    const toggleMenu = ()=> {
        settoggle(!toggle)
    }


  return (
    <nav className='navbar'>
        <div className='lg-navbar'>
            <div className="logo-wrapper">
                <img src={logo} className="logo"/>
            </div>
            <ul className="link-wrapper">
                <Link to="/browse" className="link">Home</Link>
                <Link to="/TVshows" className="link">TV shows</Link>
                <Link to="/movies" className="link">Movies</Link>
                <Link to="/latest" className="link">Latest</Link>
                <Link to="/mylist" className="link">My List</Link>
            </ul>
        </div>
        
        <div className="sm-navbar">
            <div className="logo-wrapper">
                <img src={logo} className="logo"/>
            </div>
            {toggle && (
            <ul className="sm-link-wrapper">
                <Link to="/browse" className="link">Home</Link>
                <Link to="/TVshows" className="link">TV shows</Link>
                <Link to="/movies" className="link">Movies</Link>
                <Link to="/latest" className="link">Latest</Link>
                <Link to="/mylist" className="link">My List</Link>
            </ul>
            )}
            <div className="menuBtn" onClick={toggleMenu}>
            Menu
            </div>
        </div>
    </nav>
  )
}

export default NavigationBar