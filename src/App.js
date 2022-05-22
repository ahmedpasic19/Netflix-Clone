import axios from "axios";
import requests from "./requests";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";

import HeaderPage from "./pages/HeaderPage"
import MainPage from "./pages/MainPage"
import Login from "./pages/Login"
import Signup from "./pages/Login"

function App() {
  const fetch = requests.fetc;

  const trendingMovie = () => {
    axios({
      method: `GET`,
      url: `https://api.themoviedb.org/3${fetch}`,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HeaderPage />}/>
          <Route path="/browse" element={<MainPage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
