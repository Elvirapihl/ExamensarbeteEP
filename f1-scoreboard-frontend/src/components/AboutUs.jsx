import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css"; // eller din egna CSS-fil

function About() {
  return (
    <>
      <Header />
      <div className="about-container">
        <h1>Om oss</h1>
        <p>
          F1 Scoreboard är en plattform skapad för alla Formel 1-fans. Vårt mål är att erbjuda en enkel, tydlig och snygg sida där du kan följa de senaste resultaten i både förarmästerskapet och konstruktörsmästerskapet.
        </p>
        <p>
          Du kan logga in för att anpassa din upplevelse, se resultat i realtid och hålla koll på dina favoritförare och team. Vi använder officiella API:er för att hämta uppdaterade ställningar – så att du alltid får den senaste informationen.
        </p>
        <p>
          Detta projekt är ett examensarbete med fokus på webbutveckling och användarvänlig design. Tack för att du besöker F1 Scoreboard!
        </p>
        <img src="https://robbreport.se/wp-content/uploads/2024/03/RR_2024_F1_Car_Roundup_Ferrari_SF_24-768x433.webp"></img>
      </div>
      <Footer />
    </>
  );
}

export default About;
