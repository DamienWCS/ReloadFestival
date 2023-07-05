import { useState } from "react";
import styles from "../styles/Lineup.module.scss";

function LineUp() {
  const [filter, setFilter] = useState("");
  const [dayFilter, setDayFilter] = useState("All");
  const [stageFilter, setStageFilter] = useState("All");
  const [showAllArtists, setShowAllArtists] = useState(false);

  const data = [
    {
      day: "Saturday",
      stage: "Flying High",
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
      stage: "Sonic Sphere",
      artistes: [
        "Afrojack",
        "Benni Benassi",
        "Jax Jones",
        "Paul Kalkbrenner",
        "Disclosure",
        "Excision",
        "Deadmau5",
        "Dr Peacock",
        "Charlotte de Witte",
        "DJ Snake",
      ],
    },
    {
      day: "Sunday",
      stage: "Electronic Dawn",
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
      stage: "Sunset Stage",
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
    artists = [...new Set(data.flatMap(({ artistes }) => artistes))].sort(
      (a, b) => a.localeCompare(b)
    );
  }
  const matchesFilter = (value, currentFilter) =>
    currentFilter === "All" || value === currentFilter;

  return (
    <div className={styles.body}>
      <div className={styles["lineup-block"]}>
        <h2>LINEUP</h2>
      </div>
      <iframe
        className={styles.lecteur}
        title="player"
        style={{ borderRadius: "15px" }}
        src="https://open.spotify.com/embed/playlist/1TqwrS5c8vgpO4h4U5gPjQ?utm_source=generator"
        width="90%"
        height="150"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      <div className={styles["box-filter"]}>
        <input
          className={styles.input}
          type="search"
          placeholder="Nom de l' artiste"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button
          className={`${styles["button-artistes"]} ${
            showAllArtists ? styles["active-artistes"] : ""
          }`}
          type="submit"
          onClick={handleAllArtists}
        >
          Artistes
        </button>
        <select
          className={styles["button-stage"]}
          onChange={(e) => setStageFilter(e.target.value)}
        >
          <option value="All">All Stages</option>
          <option value="Flying High">Flying High</option>
          <option value="Sonic Sphere">Sonic Sphere</option>
          <option value="Electronic Dawn">Electronic Dawn</option>
          <option value="Sunset Stage">Sunset Stage</option>
        </select>
        <button
          className={`${styles["button-day"]} ${
            dayFilter === "Saturday" ? styles["active-saturday"] : ""
          }`}
          type="submit"
          onClick={() => handleDayFilter("Saturday")}
        >
          Samedi
        </button>
        <button
          className={`${styles["button-day"]} ${
            dayFilter === "Sunday" ? styles["active-sunday"] : ""
          }`}
          type="submit"
          onClick={() => handleDayFilter("Sunday")}
        >
          Dimanche
        </button>
      </div>
      <div className={styles.stage_content}>
        {showAllArtists
          ? artists
              .filter((artist) =>
                artist.toLowerCase().includes(filter.toLowerCase())
              )
              .map((artist) => <li key={artist}>{artist}</li>)
          : data
              .filter(
                ({ day, stage }) =>
                  matchesFilter(day, dayFilter) &&
                  matchesFilter(stage, stageFilter)
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
