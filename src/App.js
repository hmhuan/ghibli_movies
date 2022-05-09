import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms();
  }, []);

  async function getFilms() {
    const response = await fetch("https://ghibliapi.herokuapp.com/films");
    const data = await response.json();
    console.log(data);
    setFilms(data);
  }

  return (
    <div className="App">
      <img src='logo.jpg' alt="logo"></img>
      <div className="container">
        {films.map((film) => (
          <div key={film.id} className="card">
            <h1>{film.title}</h1>
            <p>{film.description.substring(0, 289) + '...'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
