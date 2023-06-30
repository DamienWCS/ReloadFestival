import { AiFillCloseCircle, AiFillStar } from "react-icons/ai";
import Proptypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";

import FetchArtists from "./FetchArtists";

import "../styles/ArtistDescription.scss";

function ArtistDescription({ togglePopUp, artistSelected }) {
  // Récupérer les infos depuis l'API reload_festival.sql:
  const [reloadArtistData, setReloadArtistData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/name/${artistSelected}`)
      .then((response) => {
        setReloadArtistData(response.data);
        // setReloadArtistData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  // Récupérer les images depuis l'API spotify:
  const artists = FetchArtists();
  const artistSelectedData = artists.find((el) => el.name === artistSelected);

  // Fonction pour activation du state favorites:
  const [isFavorites, setIsFavorites] = useState(false);
  const addFavourite = () => {
    setIsFavorites(!isFavorites);
  };

  return (
    <div className="popUp">
      {artistSelectedData && reloadArtistData.length > 0 && (
        <>
          <div
            className="overlay"
            role="button"
            onClick={togglePopUp}
            onKeyDown={togglePopUp}
            aria-label="Hide pop-up"
            tabIndex={0}
          />
          <div className="descriptionCard">
            {artists.length > 0 && reloadArtistData.length > 0 && (
              <>
                <h1 className="artist_name">{artistSelectedData.name}</h1>
                <AiFillCloseCircle
                  className="closeButton"
                  onClick={togglePopUp}
                />
                <AiFillStar
                  className={isFavorites ? "starActive" : "starInactive"}
                  onClick={addFavourite}
                />
                <div className="informations">
                  <div className="showDetails">
                    <p className="jour">{reloadArtistData[0].day}</p>
                    <p className="heure">{reloadArtistData[0].hour}</p>
                    <p className="scène">{reloadArtistData[0].stage}</p>
                  </div>
                  <div className="details">
                    <div className="photo">
                      <img
                        className="ArtistPhoto"
                        src={artistSelectedData.images[1].url}
                        alt="name"
                      />
                      <h3 className="real_name">
                        {reloadArtistData[0].real_name}
                      </h3>
                      <h3 className="origin">{reloadArtistData[0].origin}</h3>
                    </div>
                    <p className="description">
                      {reloadArtistData[0].description}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

ArtistDescription.propTypes = {
  togglePopUp: Proptypes.func.isRequired,
  artistSelected: Proptypes.string.isRequired,
};

export default ArtistDescription;
