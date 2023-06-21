import FetchArtists from "../components/FetchArtists";
import "../styles/HomePage.scss";

function HomePage() {
  const artists = FetchArtists();
  const mainArtists = artists.slice(0, 5);

  return (
    <div className="home-page">
      <h1>Reload Fest</h1>
      <div className="info">
        <p>19 & 20th August 2023</p>
        <p>Les Minimes</p>
        <p>Larochelle</p>
      </div>
      <img
        className="coverImg"
        src="https://images.unsplash.com/photo-1582711012124-a56cf82307a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1240&q=80"
        alt="Crowd in front of a stage"
      />
      <div className="main-artists">
        {/* test pour voir si la fonction FetchArtist marche: */}
        {mainArtists.map((elem) => (
          <div key={elem.id}>
            {elem.name && <h3>{elem.name}</h3>}
            {elem.images && (
              <img src={elem.images[1].url} alt={`${elem.name}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
