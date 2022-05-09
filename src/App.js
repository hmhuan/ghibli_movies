import "./App.css";
import { useEffect, useState } from "react";
import Film from "./Film.js";

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms();
  }, []);

  async function getFilms() {
    const response = await fetch("https://ghibliapi.herokuapp.com/films");
    const data = await response.json();
    setFilms(data);
  }

  return (
    <div className="App">
      <img src='logo.png' alt="logo"></img>
      <div className="container">
        {films.map((film) => (
          <Film key={film.id} film={film}/>
        ))}
      </div>
    </div>
  );
}

export default App;
