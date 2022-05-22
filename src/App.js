import axios from "axios";
import requests from "./requests";

function App() {
 
  const fetch = requests.fetc

  const trendingMovie = () => {
    
    axios({
      method: `GET`,
      url: `https://api.themoviedb.org/3${fetch}`
    }).then((response) => {
      console.log(response)
    })
  }


  return (
    <div>
      <div className="navbar">
        <nav>
          Netflix
          <ul>
            <a>Home</a>
            <a>Tv Shows</a>
            <a>Movies</a>
            <a>Latest</a>
            <a>MyList</a>
          </ul>
          <div>
            <img alt="profile_Photo"/>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
