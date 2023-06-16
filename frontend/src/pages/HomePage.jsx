import "./HomePage.scss";

function HomePage() {
  const mainArtists = [];

  return (
    <body>
      <h1>Reload Fest</h1>
      <div class="info">
        <p>19 & 20th August 2023</p>
        <p>Les Minimes</p>
        <p>Larochelle</p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1582711012124-a56cf82307a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1240&q=80"
        alt="Crowd in front of a stage"
      />
      <div class="mainArtists">
        *****A changer: têtes d'affiche du festival en animation défilante
      </div>
    </body>
  );
}

export default HomePage;
