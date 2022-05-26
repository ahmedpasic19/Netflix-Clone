import axios from "axios";
import requests from "./requests";

import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

import { BrowserRouter as Router, NavigationType, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import HeaderPage from "./pages/HeaderPage";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Latest from "./pages/Latest"
import Movies from "./pages/Movies"
import Mylist from "./pages/Mylist";
import TVshows from "./pages/TVshows"
import ProtectedRoutes from "./components/ProtectedRoutes";
import ProtectedRoutesLoggedIn from "./components/ProtectedRoutesLoggedIn"



function App() {
  // FETCHING MOVIES WITH AXIOS
  const fetch = requests.fetchActionMovies;
  const trendingMovie = () => {
    axios({
      method: `GET`,
      url: `https://api.themoviedb.org/3${fetch}`,
    }).then((response) => {
      console.log(response);
    });
  };

  // CHECKING IF USER AUTHORIZED AND RESTRICTING CERTAN PAGES
  const [authorized, setauthorized] = useState()
  onAuthStateChanged(auth,(currentUser) => {
    if(currentUser) {
      setauthorized(true)
    } else {
      setauthorized(false)
    }
  })
  
  return (
    <div className="page_container">
      <div className="content_wraper">
        <Router>
          <NavigationBar/>
          <Routes>
            <Route path="/" element={<HeaderPage authorized={authorized}/>} />
            <Route path="/login" element={<Login authorized={authorized}/>} />
            <Route path="/signup" element={<Signup authorized={authorized}/>} />
            <Route path="/browse" element={<MainPage authorized={authorized}/>} />
            <Route path="/TVshows" element={<TVshows authorized={authorized}/>} />
            <Route path="/movies" element={<Movies authorized={authorized}/>} />
            <Route path="/latest" element={<Latest authorized={authorized}/>} />
            <Route path="/mylist" element={<Mylist authorized={authorized}/>} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
