import React, { useState } from "react";
import { useAtom } from "jotai";
import { userAtom } from "../atom";

function SignupForm() {
  const [, setUser] = useAtom(userAtom);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
            first_name: firstName,
            last_name: lastName,
          },
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = response.headers.get("Authorization");
        const userEmail = data.data.email;

        localStorage.setItem("token", token);
        localStorage.setItem("email", userEmail);

        setUser((prevUser) => ({
          ...prevUser,
          isLoggedIn: true,
          email: userEmail,
        }));
      } else {
        setError("Erreur lors de la création du compte");
      }
    } catch (error) {
      setError("Erreur lors de la création du compte");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Créer un compte</h2>
      {error && <p>{error}</p>}
      <div>
        <label htmlFor="firstName">Prénom :</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Nom :</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="passwordConfirmation">
          Confirme ton mot de passe :
        </label>
        <input
          type="password"
          id="passwordConfirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
        />
      </div>
      <button type="submit">Créer un compte et se connecter</button>
    </form>
  );
}

export default SignupForm;
