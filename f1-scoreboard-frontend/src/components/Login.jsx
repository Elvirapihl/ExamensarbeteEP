import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (err) {
      setError("Fel e-post eller lösenord");
    }
  };

  return (
    <>
    <Header />
    <form onSubmit={handleLogin}>
      <h2>Logga in</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input type="email" placeholder="E-post" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Lösenord" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Logga in</button>
    </form>
    <Footer />
    </>
  );
}

export default Login;
