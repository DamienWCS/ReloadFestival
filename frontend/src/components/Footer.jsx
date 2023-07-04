import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.scss";
import logoCinereact from "../assets/Images/partenaires/logo-cinereact.svg";
import logoMcu from "../assets/Images/partenaires/logo-mcu.svg";
import logoQuestubois from "../assets/Images/partenaires/Logo-Questubois.png";

function Footer() {
  const [showLogos, setShowLogos] = useState(false);

  const handlePartenairesClick = () => {
    setShowLogos(!showLogos);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.links}>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/informations">À propos</Link>
          </li>
          <li>
            <Link to="/review">Review</Link>
          </li>
          <li>
            <button
              type="button"
              className={styles.buttonPartenaire}
              onClick={handlePartenairesClick}
            >
              Partenaires
            </button>
          </li>
        </ul>
        {showLogos && (
          <div className={styles.partenaires}>
            <div className={styles.partenairesSection}>
              <h3 style={{ color: "#333" }}>Collaborateurs</h3>
              <a
                href="https://github.com/WildCodeSchool/2023-05-JS-RemoteFR-LaBoulangerieDuCode-P2-cine-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={logoCinereact}
                  alt="cinereact"
                  className={styles.partenairesImage}
                />
              </a>
              <a
                href="https://github.com/WildCodeSchool/2023-05-JS-RemoteFR-LaBoulangerieDuCode-P2-questubois"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={logoQuestubois}
                  alt="questubois"
                  className={styles.partenairesImage}
                />
              </a>
              <a
                href="https://github.com/WildCodeSchool/2023-05-JS-RemoteFR-LaBoulangerieDuCode-P2-MCU-Timeline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={logoMcu}
                  alt="Logo-version-finale"
                  className={styles.partenairesImage}
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
