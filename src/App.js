import axios from "axios";
import requests from "./requests";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
  // const fetch = requests.fetchActionMovies;

  const trendingMovie = () => {
    axios({
      method: `GET`,
      url: `https://api.themoviedb.org/3${fetch}`,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="page_container">
      <div className="content_wraper">
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<HeaderPage />} />
            <Route path="/browse" element={<ProtectedRoutes><MainPage /></ProtectedRoutes>} />
            <Route path="/login" element={<ProtectedRoutesLoggedIn><Login /></ProtectedRoutesLoggedIn>} />
            <Route path="/signup" element={<ProtectedRoutesLoggedIn><Signup /></ProtectedRoutesLoggedIn>} />
            <Route path="/TVshows" element={<TVshows />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/latest" element={<Latest />} />
            <Route path="/mylist" element={<Mylist />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
