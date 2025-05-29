import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
    <Header />
    <div className="hero-banner">
  <img
    src="https://static.vecteezy.com/ti/gratis-vektor/p1/4595586-formel-eins-auto-und-fahrer-mit-halo-aka-head-guard-from-side-view-concept-in-cartoon-illustration-vector-on-white-background-vektor.jpg"
    alt="F1 Banner"
    className="hero-image"
  />
  <div className="hero-text">
  <h1>Välkommen till F1 Scoreboard</h1>
    <p>Upplev fart, stil och resultat på F1 Scoreboard</p>
  </div>
</div>

    <div className="landing">
      <h2>Snabba bilar och spännande resultat</h2>
      <p>Följ aktuella resultat i förar- och teamligan</p>
      <p>
        Här nedanför kan du logga in på ditt konto eller registrera ett nytt.
      </p>
      <Link to="/login">Logga in</Link> | <Link to="/register">Registrera dig</Link>
    </div>
    <Footer />
    </>
  );
}

export default LandingPage;
