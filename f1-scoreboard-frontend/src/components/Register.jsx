import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password);
    onRegister();
  };

  return (
    <>
    <Header />
    <form onSubmit={handleRegister}>
      <h2>Skapa konto</h2>
      <input type="email" placeholder="E-post" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Lösenord" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Registrera</button>
    </form>
    <Footer />
    </>
  );
  
}

export default Register;
