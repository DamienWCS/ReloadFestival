import Proptypes from "prop-types";

import "../styles/MainArtistCard.scss";

function MainArtistCard({ name, src, id }) {
  return (
    <div key={id} className="mainArtistCard">
      {name && <h1 className="artistName">{name}</h1>}
      {src && <img className="mainArtistPhoto" src={src} alt={name} />}
    </div>
  );
}

MainArtistCard.propTypes = {
  name: Proptypes.string.isRequired,
  src: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
};

export default MainArtistCard;
