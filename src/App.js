import axios from "axios";

function App() {
  const API_KEY = "c4904ed7a4620e6f16fb7d1c33309261"

 
  const newMovie = () => {
    axios({
      method : "GET",
      url: `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`
    }).then((response) => {
      console.log(response)
    })
    
  }


  return (
    <div>
      <button onClick={newMovie}>New Movie</button>
      <div>Hello</div>
    </div>
  );
}

export default App;
