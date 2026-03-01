import { Component } from "react";

class App extends Component {
  // Constructeur pour initialiser l'état et les variables d'instance
  constructor(props) {
    super(props);

    // État du composant contenant les informations de la personne et le booléen show
    this.state = {
      // Objet personne contenant fullName, bio, imgSrc et profession
      person: {
        fullName: "Lewis Hamilton",
        bio: "Lewis Hamilton est un pilote automobile britannique, septuple champion du monde de Formule 1. Connu pour son excellence en course et son engagement social.",
        imgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2016_Malaysian_Grand_Prix_2.jpg/1200px-Lewis_Hamilton_2016_Malaysian_Grand_Prix_2.jpg",
        profession: "Pilote de F1",
      },
      // Booléen pour afficher/masquer le profil
      show: false,
      // Variable pour stocker le temps écoulé depuis le montage du composant
      elapsedTime: 0,
    };

    // Référence pour l'intervalle de temps
    this.intervalId = null;
  }

  // Méthode du cycle de vie appelée après le montage du composant
  componentDidMount() {
    // Démarrer l'intervalle pour mettre à jour le temps écoulé chaque seconde
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000); // Mise à jour toutes les 1000ms (1 seconde)
  }

  // Méthode du cycle de vie appelée avant la destruction du composant
  componentWillUnmount() {
    // Nettoyer l'intervalle pour éviter les fuites mémoire
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // Méthode pour basculer l'état show (afficher/masquer le profil)
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, elapsedTime } = this.state;

    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Profil Lewis Hamilton</h1>

        {/* Afficher le temps écoulé depuis le montage du composant */}
        <p>
          <strong>Temps écoulé depuis le montage: </strong>
          {elapsedTime} seconde(s)
        </p>

        {/* Bouton pour basculer l'affichage du profil */}
        <button
          onClick={this.toggleShow}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: show ? "#FF6B6B" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          {show ? "Masquer le profil" : "Afficher le profil"}
        </button>

        {/* Afficher le profil seulement si show est true */}
        {show && (
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              border: "2px solid #333",
              borderRadius: "8px",
              maxWidth: "500px",
              backgroundColor: "#f9f9f9",
            }}
          >
            {/* Image du profil */}
            <img
              src={person.imgSrc}
              alt={person.fullName}
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />

            {/* Nom complet */}
            <h2 style={{ margin: "10px 0" }}>{person.fullName}</h2>

            {/* Profession */}
            <p
              style={{ color: "#e74c3c", fontWeight: "bold", margin: "5px 0" }}
            >
              {person.profession}
            </p>

            {/* Biographie */}
            <p style={{ color: "#555", lineHeight: "1.6", margin: "10px 0" }}>
              {person.bio}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
