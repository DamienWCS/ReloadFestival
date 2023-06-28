import "../styles/ArtistDescription.scss";
import FetchArtists from "./FetchArtists";

function ArtistDescription() {
  const artists = FetchArtists();

  return (
    <div className="descriptionCard">
      {artists.length > 0 && (
        <>
          <h1 className="artistName">hello</h1>
          <div className="informations">
            <div className="showDetails">
              <p className="jour">Jour</p>
              <p className="scène">Scène</p>
              <p className="heure">heure</p>
            </div>
            <div className="details">
              <div className="photo">
                <img
                  className="ArtistPhoto"
                  src={artists[0].images[1].url}
                  alt="name"
                />
                <h3 className="origin">Origine</h3>
              </div>
              <p className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                quod deserunt repudiandae quidem id! Culpa minus qui quaerat
                libero voluptates quis odio accusantium officiis, autem
                aspernatur enim ex nostrum doloremque!
                bdifugzefuygzefbvyzegfuyzegfuygez
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ArtistDescription;
