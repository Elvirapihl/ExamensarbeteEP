import DriverStandings from './components/DriverStandings';
import ConstructorStandings from './components/ConstructorStandings';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header />
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }} className="main-content">
      <h1>F1 Scoreboard 2024</h1>
      <DriverStandings />
      <hr />
      <ConstructorStandings />
    </div>
    <Footer />
    </>
    ); 
}

export default App;
