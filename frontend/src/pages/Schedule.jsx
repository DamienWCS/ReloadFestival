import { useEffect, useState } from "react";
import axios from "axios";

import "../styles/Schedule.scss";
import ArtistDescription from "../components/ArtistDescription";

function Schedule() {
  // Gestion du pop-up
  const [popUp, setPopUp] = useState(false);
  const [artistSelected, setArtistSelected] = useState("");

  const togglePopUp = (e) => {
    setPopUp(!popUp);
    setArtistSelected(e.target.innerHTML);
  };

  // Import des data depuis l'API reloas_festival.sql
  const [artistDatas, setArtistDatas] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/artists`)
      .then((response) => {
        setArtistDatas(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  // Affichage des stages/jour avec le heures des show
  const days = ["Samedi", "Dimanche"];
  const stages = [
    "Flying High",
    "Sonic Sphere",
    "Electronic Dawn",
    "Sunset Stage",
  ];

  return (
    <>
      <div className="schedule">
        <h1>Horaire</h1>
        {days.map((day) => (
          <div className="day" key={day}>
            <h2>{day}</h2>
            {stages.map((stage) => (
              <div className="scene" key={stage}>
                <h3>{stage}</h3>
                {artistDatas
                  .filter((item) => item.day === day && item.stage === stage)
                  .sort((a, b) => {
                    return parseFloat(a.hour) - parseFloat(b.hour);
                  })
                  .map((el) => (
                    <div className="show" key={el.id}>
                      <p className="showTime">{el.hour}</p>
                      <button
                        className="artist"
                        onClick={togglePopUp}
                        onKeyDown={togglePopUp}
                        type="button"
                      >
                        {el.name}
                      </button>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {popUp && (
        <div className="popUp">
          <div className="overlay" />
          <ArtistDescription
            togglePopUp={togglePopUp}
            artistSelected={artistSelected}
          />
        </div>
      )}
    </>
  );
}
export default Schedule;
