import axios from "axios";
import requests from "./requests";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import HeaderPage from "./pages/HeaderPage";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const fetch = requests.fetchActionMovies;

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
            <Route path="/browse" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
