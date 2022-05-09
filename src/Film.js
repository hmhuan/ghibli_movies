function Film(props) {
    const film = props.film;
    return (
        <div className="card">
            <h1>{film.title}</h1>
            <img src={film.image} alt={film.title}></img>
            <p>{film.description.substring(0, 289) + '...'}</p>
        </div>
    );
}

export default Film;