import { useState } from "react";
import "../styles/lineup.scss";

function LineUp() {
  const [filter, setFilter] = useState("");
  const [dayFilter, setDayFilter] = useState("All");
  const [stageFilter, setStageFilter] = useState("All");
  const [showAllArtists, setShowAllArtists] = useState(false);

  const data = [
    {
      day: "Saturday",
      stage: "Stage 1",
      artistes: [
        "Armin van Buuren",
        "Calvin Harris",
        "Hardwell",
        "Illenium",
        "Kygo",
        "Martin Garrix",
        "Nicky Romero",
        "Quintino",
        "Skrillex",
        "Tiesto",
      ],
    },
    {
      day: "Saturday",
      stage: "Stage 2",
      artistes: [
        "Afrojack",
        "Benni Benassi",
        "Jax Jones",
        "Paul Kalkbrenner",
        "Disclosure",
        "Excision",
        "Deadmau5",
        "Dr Peacock",
        "Charlotte de White",
        "DJ Snake",
      ],
    },
    {
      day: "Sunday",
      stage: "Stage 3",
      artistes: [
        "Dash Berlin",
        "Nora En Pure",
        "Marshmello",
        "Zedd",
        "Alesso",
        "Major Lazer",
        "The Chainsmokers",
        "Sickick",
        "Deorro",
        "Timmy Trumpet",
      ],
    },
    {
      day: "Sunday",
      stage: "Stage 4",
      artistes: [
        "Sound of Legend",
        "Da Tweekaz",
        "Sub Zero Project",
        "R3hab",
        "Ummet Ozcan",
        "Les Gordon",
        "NTO",
        "NHYX",
        "Alle Farben",
        "Marcapasos",
      ],
    },
  ];

  const handleDayFilter = (day) => {
    if (dayFilter === day) {
      setDayFilter("All");
    } else {
      setDayFilter(day);
    }
  };

  const handleAllArtists = () => {
    setShowAllArtists(!showAllArtists);
  };

  let artists;
  if (showAllArtists) {
    artists = [...new Set(data.flatMap(({ artistes }) => artistes))].sort();
  }

  return (
    <div className="body">
      <div className="lineup-block">
        <h2>LINEUP</h2>
      </div>
      <div className="box-filter">
        <input
          className="input"
          type="search"
          placeholder="Nom de l' artiste"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button
          className={`button-artistes ${
            showAllArtists ? "active-artistes" : ""
          }`}
          type="submit"
          onClick={handleAllArtists}
        >
          Artistes
        </button>
        <select
          className="button-stage"
          onChange={(e) => setStageFilter(e.target.value)}
        >
          <option value="All">All Stages</option>
          <option value="Stage 1">Stage 1</option>
          <option value="Stage 2">Stage 2</option>
          <option value="Stage 3">Stage 3</option>
          <option value="Stage 4">Stage 4</option>
        </select>
        <button
          className={`button-day ${
            dayFilter === "Saturday" ? "active-saturday" : ""
          }`}
          type="submit"
          onClick={() => handleDayFilter("Saturday")}
        >
          Saturday
        </button>
        <button
          className={`button-day ${
            dayFilter === "Sunday" ? "active-sunday" : ""
          }`}
          type="submit"
          onClick={() => handleDayFilter("Sunday")}
        >
          Sunday
        </button>
      </div>
      <div className="stage_content">
        {showAllArtists
          ? artists
              .filter((artist) =>
                artist.toLowerCase().includes(filter.toLowerCase())
              )
              .map((artist) => <li key={artist}>{artist}</li>)
          : data
              .filter(
                ({ day, stage }) =>
                  (dayFilter === "All" || day === dayFilter) &&
                  (stageFilter === "All" || stage === stageFilter)
              )
              .map(({ stage, artistes }) => (
                <div key={stage}>
                  <h4>{stage}</h4>
                  <ul>
                    {artistes
                      .filter((artist) =>
                        artist.toLowerCase().includes(filter.toLowerCase())
                      )
                      .map((artist) => (
                        <li key={artist}>{artist}</li>
                      ))}
                  </ul>
                </div>
              ))}
      </div>
    </div>
  );
}

export default LineUp;
