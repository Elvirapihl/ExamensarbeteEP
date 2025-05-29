import { Link } from 'react-router-dom';

export default function Header() {
    return (
      <header className="header">
         <img src="https://images.vexels.com/media/users/3/127814/isolated/svg/9c461c7bfbe7309a432828c34374da96.svg" alt="F1 Icon" className="f1-icon" />
        <h1>F1 Scoreboard</h1>

        <Link to="/landingpage"> Hem</Link>
        <Link to="/aboutus"> Om oss</Link>
       
      </header>
    );
  }
  